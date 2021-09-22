import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Divider, ListItem, Icon } from 'react-native-elements'
import Lunchspecials from '../shared/lunchspecials'

function LunchSpecialsTab() {

    const renderLunchSpecialFooter = () => {
        return (
            <View style={{marginBottom: 10}}>
                <Icon style={{marginTop: 50, marginBottom: 10}}
                name="fire"
                type="font-awesome"/>
                <Text style={{alignSelf: 'center', fontSize: 15, marginBottom: 5}}>Please note:</Text>
                <Text style={{textAlign: 'center', fontSize: 13, marginBottom: 10}}>All spicy dishes range in heat level.  Mild indicates light heat, Hot indicates moderate, and Hot and Spicy are our hottest items.</Text>
            </View>
        )
    }

    const renderLunchSpecialHeader = () => {
        return (
            <View>
                <Text style={styles.header}>LUNCH SPECIALS</Text>
                <Divider style={styles.divider}/>
                <Text style={{alignSelf: 'center', fontSize: 15, marginBottom: 1}}>Available Tuesday through Friday 11:30am-3:00pm</Text>
                <Text style={{alignSelf: 'center', fontSize: 13, marginBottom: 40}}>Served with thai rolls, ravioli and choice of white or brown rice</Text>
                <Image 
                style={styles.logo}
                source={require('../assets/menu.png')}
                />
            </View>
        )
    }



    const renderLunchSpecials = ({ item }) => {
        if (item.spice) {
            return (
                <ListItem 
                containerStyle={styles.item}
                title={`${item.title} (${item.spice})`}
                subtitle={item.description}
                rightSubtitle={`$${item.price}`}
                leftIcon={{name:'fire', type:'font-awesome'}}
                />
            )} else {
                return (
                    <ListItem 
                            containerStyle={styles.item}
                            title={`${item.title}`}
                            subtitle={item.description}
                            rightSubtitle={`$${item.price}`}
                    />
                )
            }
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={Lunchspecials}
                renderItem={renderLunchSpecials}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={renderLunchSpecialHeader}
                ListFooterComponent={renderLunchSpecialFooter}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f7f0',
        flex: 1
    },
    header: {
            alignSelf: 'center',
            fontSize: 25,
            marginTop: 20,
            marginBottom: 10
    },
    divider: {
        backgroundColor: 'black',
        marginBottom: 20
    },
    logo: {
        height: 100,
        alignSelf: 'center',
        marginBottom: 30
    },
    item: {
        backgroundColor: '#f0f7f0'
    }
})

export default LunchSpecialsTab
