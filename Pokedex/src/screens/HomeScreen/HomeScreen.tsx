import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../theme/appTheme';
import {FlatList} from 'react-native-gesture-handler';
import PokemonCard from '../../components/PokemonCard';
import usePokemonPaginated from '../../hooks/usePokemonPaginated';

//images
const pokebola = require('../../assets/pokebola.png');



const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <Image source={pokebola} style={styles.pokebolaBG} />


      <View
      style={{
        ...styles.globalMargin,
        alignItems:'center'
      }}
      >
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        //HEADER
        ListHeaderComponent={
          <Text
            style={{...styles.title, ...styles.globalMargin, top: top + 20, marginBottom: top + 30}}>
            Pokedex
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        //Inifinite Scroll - Start
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        //Inifinite Scroll - End
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={30} color="grey" />
        }
      />
      </View>
      
    </>
  );
};

export default HomeScreen;
