import React, { useState, useEffect } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../../components/Loading';
import PokemonCard from '../../components/PokemonCard';
import {SearchInput} from '../../components/SearchInput';
import usePokemonSearch from '../../hooks/usePokemonSearch';
import {styles as globalStyles} from '../../theme/appTheme'
import { SimplePokemon } from '../../interfaces/pokemonInterfaces';

const { width } = Dimensions.get('window')

export default function SearchScreen() {

const {fetching, simplePokemonList } = usePokemonSearch()
const {top} = useSafeAreaInsets();
const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])
const [term, setTerm] = useState('')

useEffect(() => {
    if (term.length === 0) {
        return setPokemonFiltered([]);
    }
    else{
        setPokemonFiltered(
            simplePokemonList.filter( 
                (poke) => poke.name.toLocaleLowerCase()
                .includes(term.toLocaleLowerCase()) )
        );
        }
}, [term])




if( fetching ) {
    return(
        <Loading/>
    )
}

    return (
        <SafeAreaView style={{flex:1, marginHorizontal: 20,
         }}>
            <SearchInput
            onDebounce={(value)=>setTerm(value)}
            style={{
                position: 'absolute',
                zIndex: 999,
                width: width-40,
                marginTop: 30
            }}
            />
            <FlatList
        data={pokemonFiltered}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        //HEADER
        ListHeaderComponent={
          <Text
            style={{...globalStyles.title, 
            ...globalStyles.globalMargin, 
            top: top + 45,
             marginBottom: top + 50,
             marginTop: top +30
             }}>
            { term }
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loadingContainer:{flex:1,
        justifyContent: 'center',
        alignItems:'center'
        },
    
})
