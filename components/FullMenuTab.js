import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, ImageBackground } from 'react-native';
import { Divider } from 'react-native-elements'

function FullMenuTab() {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.header}>BANGKOK HILL FULL MENU</Text>
            <Text style={styles.subtitle}>Starters</Text>
            <Divider style={styles.divider}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f7f0',
        flex: 1

    },
    header: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 23,
    },
    subtitle: {
        alignSelf: 'center',
        fontSize: 17,
        marginTop: 30,
    },
    divider: {
        backgroundColor: 'black',
    }
}
)

export default FullMenuTab;