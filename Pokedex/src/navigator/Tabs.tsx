import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import { Platform, StyleSheet } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

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
      component={SearchScreen}
      options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => <Icon color={color} size={20} name='search'/>
      }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({})
