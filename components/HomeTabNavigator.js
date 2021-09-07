import React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';


function HoursScreen() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }
  
  function LocationScreen() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }


const HomeTabNavigator = createBottomTabNavigator(
    {Hours: HoursScreen,
    Home: HomeScreen,
    Location: LocationScreen},
       {initialRouteName: 'Home'
       } 
);

export default createAppContainer(HomeTabNavigator)