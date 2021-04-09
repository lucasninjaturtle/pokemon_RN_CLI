import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen  from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

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
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
}

