import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen.tsx/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
  HomeScreen: undefined,
  PokemonScreen: {simplePokemon: SimplePokemon, color: string}
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = ()=>{
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
        cardStyle:{
          backgroundColor:'white'
        }
      }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name="PokemonScreen"
                      component={PokemonScreen}
                      // options={{
                      //   headerShown: true
                      // }} 
                      />
      </Stack.Navigator>
  );
}

