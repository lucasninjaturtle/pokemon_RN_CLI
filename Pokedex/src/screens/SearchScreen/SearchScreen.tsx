import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../../components/Loading';
import PokemonCard from '../../components/PokemonCard';
import SearchInput from '../../components/SearchInput';
import usePokemonSearch from '../../hooks/usePokemonSearch';
import {styles as globalStyles} from '../../theme/appTheme'

export default function SearchScreen() {

const {fetching, simplePokemonList } = usePokemonSearch()
const {top} = useSafeAreaInsets();



if( fetching ) {
    return(
        <Loading/>
    )
}

    return (
        <SafeAreaView style={{flex:1, marginHorizontal: 20,
         }}>
            <SearchInput/>
            <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        //HEADER
        ListHeaderComponent={
          <Text
            style={{...globalStyles.title, 
            ...globalStyles.globalMargin, 
            top: top + 20,
             marginBottom: top + 30}}>
            Pokedex
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
