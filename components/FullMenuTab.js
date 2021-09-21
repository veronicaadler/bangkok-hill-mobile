import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, ImageBackground, SectionList } from 'react-native';
import { Divider, ListItem, Rating, Icon } from 'react-native-elements'
import Menu from '../shared/menu'

function FullMenuTab() {

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
        if (item.price === null) {
            return (
                <ListItem 
                containerStyle={styles.sectionsubtitle}
                title={`${item.description}`}
                />
            )
        }
        else {
            return (
                <ListItem 
                        containerStyle={styles.item}
                        title={item.title}
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
    },
    item: {
        backgroundColor: '#f0f7f0'
    },
    sectionsubtitle: {
        alignSelf: 'center',
        fontSize: 15,
        backgroundColor: '#f0f7f0'
    }
}
)

export default FullMenuTab;