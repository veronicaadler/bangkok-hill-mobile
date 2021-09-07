import React, { Component } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import HomeScreen from './components/HomeScreen';
import MenuScreen from './components/MenuScreen';
import AboutScreen from './components/AboutScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

function Logo() {
  return(
      <Image 
        source={require('./assets/blacklogo.png')}
        style={{alignSelf: 'center'}}
      />
  )
}

const HomeNavigator = createStackNavigator(
  { Home: HomeScreen },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fba75b',
      },
      headerTitle: () => <Logo />,
    }},
)

const MenuNavigator = createStackNavigator(
  { Menu: MenuScreen },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fba75b',
      },
      headerTitle: () => <Logo />,
    }},
    )

const AboutNavigator = createStackNavigator(
      { About: AboutScreen },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fba75b',
      },
      headerTitle: () => <Logo />,
    }},
  )

  const SideNavigator = createDrawerNavigator(
    {
        Home: HomeNavigator,
        Menu: MenuNavigator,
        About: AboutNavigator
    },
    {
        drawerBackgroundColor: '#f0f7f0'
    }
);


export default function App() {
  return (
      <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
      <AppNavigator/>
      </View>
  );
}

const AppNavigator = createAppContainer(SideNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    justifyContent: 'center'
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    textShadowColor: '#333',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10, 
    fontSize: 50

  },
  subtitle: {
    alignSelf: 'center',
    color: 'white',
    textShadowColor: '#333',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10, 
    fontSize: 20
  }
});
