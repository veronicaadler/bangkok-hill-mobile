import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, ScrollView } from 'react-native';
import { ListItem, Input, Button, Icon} from 'react-native-elements';
import CardDeckInfo from '../shared/carddeckinfo';


function HomeScreen() {


    const renderCardDeck = ({item}) => {
      return (
        <ListItem
          containerStyle={styles.item}
          title={item.title}
          subtitle={item.description}
          leftAvatar={{source:{uri: item.src},
          size: 'large'}}
        />
      );
    }

      return (
        <ScrollView style={styles.container}>
          <ImageBackground
            source={{uri: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}}
            style={styles.image}
          >
          <Text style={styles.title}>Bangkok Hill</Text>
          <Text style={styles.subtitle}>Original Thai Cuisine</Text>
          </ImageBackground>
          <Button style={styles.orderbutton}
            title='Order Now'
            buttonStyle={{backgroundColor: '#ca615c'}}
            />
          <View>
          <FlatList
            data={CardDeckInfo}
            renderItem={renderCardDeck}
            keyExtractor={item => item.id.toString()}
          />
          </View>
          <View style={{textAlign: 'center'}}>
          <Input 
            label="Subscribe to Our Newsletter"
            labelStyle={{alignSelf: 'center', fontSize: 20}}
            placeholder="username@gmail.com"
            containerStyle={{marginTop: 25, marginBottom: -12}}
            inputStyle={{textAlign: 'center'}}
          />
          <Button 
          title="Subscribe"
          buttonStyle={{backgroundColor: '#324443'}}
          raised
          icon={
            <Icon 
            type='font-awesome'
            name='envelope-o'
            />
          }
          />
          </View>
        </ScrollView>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
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
    },
    item: {
      backgroundColor: 'white',
      margin: 7,
      marginTop: 12,
      paddingTop: 10,
    }
  });

export default HomeScreen;