import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import MenuScreen from './components/MenuScreen';
import AboutScreen from './components/AboutScreen';
import HomeTabNavigator from './components/HomeTabNavigator';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

function Logo() {
  return(
      <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
            <Image
                source={require('./assets/blacklogo.png')}
            />
        </View>
  )
}

const HomeNavigator = createStackNavigator(
  { Home: HomeTabNavigator },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#fba75b',
      },
      headerTitle: () => <Logo />,
      headerLeft: (
          <Icon
                name='bars'
                type='font-awesome'
                onPress={() => navigation.toggleDrawer()}
                iconStyle={{marginLeft: 10,
                fontSize: 24, color: '#324443'}}
                
            />
       ), 
      headerRight: <View></View>
    }),
    },
)

const MenuNavigator = createStackNavigator(
  { Menu: MenuScreen },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#fba75b',
      },
      headerTitle: () => <Logo />,
      headerLeft: (
        <Icon
              name='bars'
              type='font-awesome'
              onPress={() => navigation.toggleDrawer()}
              iconStyle={{marginLeft: 10,
              fontSize: 24, color: '#324443'}}
              
          />
     ), 
    headerRight: <View></View>
    })})

const AboutNavigator = createStackNavigator(
      { About: AboutScreen },
      {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#fba75b',
      },
      headerTitle: () => <Logo />,
      headerLeft: (
        <Icon
              name='bars'
              type='font-awesome'
              onPress={() => navigation.toggleDrawer()}
              iconStyle={{marginLeft: 10,
              fontSize: 24, color: '#324443'}}
              
          />
     ), 
    headerRight: <View></View>
    })})

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
