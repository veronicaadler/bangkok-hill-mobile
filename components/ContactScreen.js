import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

function ContactScreen() {
    return (
      <View>
        <Card 
            title='Contact Us'
        >
        <Text style={styles.header}>Address</Text>
        <Text style={styles.text}>177 Massachusetts Avenue</Text>
        <Text style={styles.text}>Lunenburg, MA 01462</Text>
        <Text style={styles.header}>Call Us</Text>
        <Text style={styles.text}>978-343-0555</Text>
        <Text style={styles.text}>978-343-0523</Text>
        </Card>
      </View>
    )
  }

  const styles = StyleSheet.create({
      header: {
          alignSelf: 'center',
          fontSize: 16,
          paddingBottom: 8,
          textDecorationLine: 'underline'
      },
      text: {
          alignSelf: 'center',
          paddingBottom: 4,
      }
  })

  export default ContactScreen;
