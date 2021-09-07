import React from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';

function HomeScreen() {

      return (
        <View style={styles.container}>
          <ImageBackground
            source={{uri: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}}
            style={styles.image}
          >
          <Text style={styles.title}>Bangkok Hill</Text>
          <Text style={styles.subtitle}>Original Thai Cuisine</Text>
          </ImageBackground>
          <Button style={styles.orderbutton}
            title='Order Now'
            color='#ca615c'
            />
        </View>
      )
}

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

export default HomeScreen;