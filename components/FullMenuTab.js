import React from 'react';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';
import { Divider, ListItem } from 'react-native-elements'
import Menu from '../shared/menu'

function FullMenuTab() {

    const renderMenuHeading = () => {
        return (
            <View>
                <Text style={styles.menuheader}>BANGKOK HILL MENU</Text>
                <Image 
                style={styles.logo}
                source={require('../assets/menu.png')}
                />
            </View>
        )
    }

      const renderSectionHeaders = ({ section: { title } }) => {
          return (
              <View>
                  <Text style={styles.subtitle}>{title}</Text>
                  <Divider style={styles.divider}/>
              </View>
          )
      }
      
      const renderStarters = ({ item }) => {
        if (item.lunchprice && item.spice) {
            return (
            <ListItem 
                containerStyle={styles.item}
                title={`${item.title} (${item.spice})`}
                subtitle={item.description}
                rightSubtitle={`Lunch\n$ ${item.lunchprice}\nDinner\n$ ${item.dinnerprice}`}
                leftIcon={{name:'fire', type:'font-awesome'}}
                />
            )
        } else if (!item.price && item.spice) {
            return (
                <ListItem 
                containerStyle={styles.item}
                title={`${item.title} (${item.spice})`}
                subtitle={item.description}
                leftIcon={{name:'fire', type:'font-awesome'}}
                />
            )
        } else if (item.spice) {
            return (
                <ListItem 
                containerStyle={styles.item}
                title={`${item.title} (${item.spice})`}
                subtitle={item.description}
                rightSubtitle={`$${item.price}`}
                leftIcon={{name:'fire', type:'font-awesome'}}
                />
            )
        } else if (item.lunchprice) {
            return (
                <ListItem 
                containerStyle={styles.item}
                title={`${item.title}`}
                subtitle={item.description}
                rightSubtitle={`Lunch\n$ ${item.lunchprice}\nDinner\n$ ${item.dinnerprice}`}
                />
            )
        }
        if (!item.title) {
            return (
                <ListItem 
                containerStyle={styles.item}
                title={`${item.description}`}
                />
            )
        } else if (!item.description) {
            return (
                <ListItem 
                        containerStyle={styles.item}
                        title={`${item.title}`}
                        rightSubtitle={`$${item.price}`}
                />
            )
        }
        if (!item.price) {
            return (
                <ListItem 
                containerStyle={styles.item}
                title={`${item.title}`}
                subtitle={item.description}
                />
            )
        }
        else {
            return (
                <ListItem 
                        containerStyle={styles.item}
                        title={`${item.title}`}
                        subtitle={item.description}
                        rightSubtitle={`$${item.price}`}
                />
            )
        }
    };

    return(
        <View style={styles.container}>
            <SectionList
                sections={Menu}
                renderItem={renderStarters}
                renderSectionHeader={renderSectionHeaders}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={renderMenuHeading}
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
        marginBottom: 20
    },
    item: {
        backgroundColor: '#f0f7f0'
    },
    menuheader: {
        alignSelf: 'center',
        fontSize: 27,
        marginTop: 20,
        marginBottom: 20
    },
    logo: {
        height: 100,
        alignSelf: 'center'
    }
}
)

export default FullMenuTab;