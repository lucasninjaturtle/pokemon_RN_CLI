import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator, RootStackParams } from './Navigator';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import { Platform, StyleSheet } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonScreen from '../screens/PokemonScreen.tsx/PokemonScreen';

const Tab = createBottomTabNavigator();

const TabSearch = createStackNavigator<RootStackParams>();

export const TabSearchComponent = ()=>{
  return (
      <TabSearch.Navigator
      screenOptions={{
        headerShown:false,
        cardStyle:{
          backgroundColor:'white'
        }
      }}
      >
        <TabSearch.Screen name='HomeScreen' component={SearchScreen} />
        <TabSearch.Screen name="PokemonScreen"
                      component={PokemonScreen}
                      // options={{
                      //   headerShown: true
                      // }} 
                      />
      </TabSearch.Navigator>
  );
}

export const Tabs = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
        backgroundColor:'white'
    }}
    tabBarOptions={{
        activeTintColor: 'blue' ,
        labelStyle:{
            marginBottom: ( Platform.OS === 'ios' ) ? 0 : 10
        },
        style:{
            // backgroundColor: 'red',
            position: 'absolute',
            backgroundColor: 'rgba( 255, 255, 255, 0.8)',
            borderWidth: 0,
            elevation: 0,
        }
    }}
    >
      <Tab.Screen 
      name="HomeScreen" 
      component={Navigator} 
      options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => <Icon color={color} size={20} name='list-outline'/>
      }}
      />
      <Tab.Screen 
      name="SearchScreen"
      component={TabSearchComponent}
      options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => <Icon color={color} size={20} name='search'/>
      }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({})
