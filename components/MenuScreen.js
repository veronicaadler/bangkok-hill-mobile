import React from 'react';
import FullMenuTab from './FullMenuTab';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

function LunchSpecialsTab() {
    return(
        <View>
            <Text>Hello World Lunch Specials</Text>
        </View>
    )
}




function MenuScreen() {
    const MenuTabNavigator = createMaterialTopTabNavigator({
        'Full Menu': FullMenuTab,
        'Lunch Specials': LunchSpecialsTab
    
    },
    {
        tabBarOptions: { 
        style: {backgroundColor: 'white'},
        indicatorStyle: {backgroundColor: '#324443'},
        inactiveTintColor: '#94a7a3',
        activeTintColor: '#324443',
        
        
      }});

    const MenuNavigator = createAppContainer(MenuTabNavigator)

    return(
        <View style={{flex: 1}}>
            <MenuNavigator />
        </View>
    )
}

export default MenuScreen;