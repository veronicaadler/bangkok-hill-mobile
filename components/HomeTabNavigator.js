import React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import HoursScreen from './HoursScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

  
  function ContactScreen() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }


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
      labelStyle: {fontSize: 14, color: 'black'},
      tabStyle: {paddingBottom: 10}
      
    }}
)


export default createAppContainer(HomeTabNavigator)