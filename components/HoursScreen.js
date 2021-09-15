import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

function HoursScreen() {
    return (
      <View>
        <Card 
            title='Hours'
            image={{
                uri: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}}
            imageStyle={{height: 400}}
        >
        <Text style={styles.header}>LUNCH</Text>
        <Text style={styles.text}>Tues to Fri: 11:30am-3:00pm</Text>
        <Text style={styles.header}>DINNER</Text>
        <Text style={styles.text}>Tues to Fri: 4:30-10:30pm</Text>
        <Text style={styles.text}>Sat: 11:30am-9:30pm</Text>
        <Text style={styles.text}>Sun: 11:30am-9:30pm {"\n"}</Text>
        <Text style={styles.text}>Mon: Closed</Text>
        </Card>
      </View>
    )
  }

  const styles = StyleSheet.create({
      header: {
          alignSelf: 'center',
          paddingBottom: 8,
          fontSize: 16,
          textDecorationLine: 'underline'

      },
      text: {
          alignSelf: 'center',
          paddingBottom: 4,
      }
  }
  )

  

  export default HoursScreen;