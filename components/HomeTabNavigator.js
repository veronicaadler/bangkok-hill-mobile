import React from 'react';
import { Text, View } from 'react-native';
import ContactScreen from './ContactScreen';
import HomeScreen from './HomeScreen';
import HoursScreen from './HoursScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

const HomeTabNavigator = createBottomTabNavigator(
    {
      Hours: HoursScreen,
      Home: HomeScreen,
      Contact: ContactScreen
    },
    {
      tabBarOptions: { 
      activeBackgroundColor: '#ca615c',
      inactiveBackgroundColor: '#fba75b',
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      labelStyle: {fontSize: 14},
      tabStyle: {paddingBottom: 10}
      
    }}
)


export default createAppContainer(HomeTabNavigator)