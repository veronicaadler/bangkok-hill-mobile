import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

function AboutScreen() {

    return (
        <ScrollView style={styles.container}>
            <Card 
                containerStyle={styles.card}
                title="OUR STORY"
                titleStyle={{color: 'white', fontSize: 20}}
                image={{uri: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}}
                imageStyle={{height: 500}} 
            >
                <Text style={styles.text}>Owners Aran and Komen Chen share a passion for cooking. "I grew up with my grandmother's love of food," Aran explains. He considers himself lucky to have spent so many Sunday afternoons at his grandmother's house while she prepared the family's favorite recipes. "Every Sunday, my grandmother would cook for the whole family. It was a big thing for us growing up. It felt like such a gift to learn from such a talented chef." Hoping to share his love of food with others, he enrolled at Le Cordon Bleu and studied under top chefs in Boston, MA. It was there that he met his future wife and co-owner Komen."</Text>
                <Text style={styles.text}>Meeting Aran in Boston seemed too good to be true. Here was this man who shared my love of food. Not only that, but for family and friends." Komen was finishing her Master's Degree in Hospitality Studies at Boston University when she met Aran. "Honestly, it just seemed like the right thing for me. When Aran proposed opening our own restaurant, something in me just went - YES, that's it!"</Text>
                <Text style={styles.text}>Looking to move away from the hustle and bustle of the big city, Aran and Komen settled in Lunenburg and shortly after opened Bangkok Hill in 2005. They've loved sharing their traditional culture and foods with their community.</Text>
                <Text style={styles.text}>"It's our little dream," explains Komen. "We love making others happy."</Text>
                <Text style={styles.text}>"I hope that anyone who comes here feels like they're home," Aran says, "That's what we're striving for everyday."</Text>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#324443'
    },
    card: {
        backgroundColor: '#324443',
        margin: 20
    },
    text: {
        marginBottom: 10,
        color: 'white',
        fontSize: 15,
        marginTop: 5
    }
})

export default AboutScreen;