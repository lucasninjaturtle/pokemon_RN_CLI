import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemonFull: PokemonFull;
}

const PokemonDetail = ({pokemonFull}: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      {/* TYPES */}
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={styles.title}>Types</Text>
        <View>
          <Text>
            {pokemonFull.types.map(({type}) => (
              <View>
                <Text style={{...styles.regularText}} key={type.name}>
                {`- ${type.name} `} 
                </Text>
              </View>
            ))}
          </Text>
        </View>

        {/* SPRITE */}

        <View
          style={{
            marginTop: 20,
          }}>
          <Text style={styles.title}>Sprites</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <FadeInImage
              uri={pokemonFull.sprites.front_default}
              style={styles.basicSprite}
            />
            <FadeInImage
              uri={pokemonFull.sprites.back_default}
              style={styles.basicSprite}
            />
          </ScrollView>
        </View>

        {/* BASE ABILITIES */}
      <View style={{...styles.container, marginLeft:0}}>
        <Text style={styles.title}>Base Abilities</Text>
        <View>
          <Text style={{...styles.regularText}}>
            {pokemonFull.abilities.map(({ability}) => (
              <View style={{marginLeft:200}}>
                <Text style={{...styles.regularText, marginLeft:15}} key={ability.name}>
                  {`- ${ability.name} `} 
                </Text>
              </View>
            ))}
          </Text>
        </View>
        </View>

{/* ATTACKS */}
<View style={{...styles.container, marginLeft:0}}>
        <Text style={styles.title}>Moves</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Text style={{...styles.regularText}}>
            {pokemonFull.moves.map(({move}) => (
              <View style={{marginLeft:200}}>
                <Text style={{...styles.regularText, marginLeft:15}} key={move.name}>
                  {`- ${move.name} `} 
                </Text>
              </View>
            ))}
          </Text>
        </ScrollView>
        </View>


        {/* STATS */}
<View style={{...styles.container, marginLeft:0}}>
        <Text style={styles.title}>Stats</Text>
        <View >
         
            {pokemonFull.stats.map((stat, i) => (
              <View key={stat.stat.name + i} style={{marginLeft:0, flexDirection: 'row'}}>
                <Text style={{...styles.regularText, marginLeft:5, width:150}} key={stat.stat.name}>
                  {`${stat.stat.name}`}
                </Text>
                <Text style={{...styles.regularText, marginLeft:5}} key={stat.base_stat}>
                  {`${stat.base_stat}`}
                </Text>
              </View>
            ))}
        </View>
        </View>

        {/* SPRITE FINAL */}

        <View
          style={{
            marginTop: 20,
            marginBottom: 30,
            alignItems:'center'
          }}>
          <Text style={styles.title}>Sprites</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <FadeInImage
              uri={pokemonFull.sprites.front_shiny}
              style={styles.basicSprite}
            />
          </ScrollView>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});

export default PokemonDetail;
