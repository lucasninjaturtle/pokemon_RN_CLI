import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../theme/appTheme'
import usePokemonPaginated from '../../hooks/usePokemonPaginated';
import { FlatList } from 'react-native-gesture-handler'
//images
const pokebola = require('../../assets/pokebola.png') 


const HomeScreen = () => {

  const { top } = useSafeAreaInsets()
  const { simplePokemonList, loadPokemons} = usePokemonPaginated()

  
    return (
        <>
        <Image
        source={pokebola}
        style={styles.pokebolaBG}
      />

      <FlatList
      data={simplePokemonList}
      keyExtractor={(pokemon)=> pokemon.id}
      showsVerticalScrollIndicator={false}
      renderItem={ ({ item}) =>
      <Image
      source={{uri:item.picture}}
      style={{
        width:100,
        height:100
      }}
      />
    }
    

    //Inifinite Scroll - Start
    onEndReached={loadPokemons}
    onEndReachedThreshold={0.4}
    //Inifinite Scroll - End

    ListFooterComponent={
      <ActivityIndicator 
        style={{height:100}}
        size={ 30 }
        color="grey"
        />}
        
      />


      {/* <Text
      style={{...styles.title, ...styles.globalMargin, top: top + 20}}
      >
        POKEDEX HOME SCREEN
      </Text>
       */}
      
    </>
    )
}

export default HomeScreen