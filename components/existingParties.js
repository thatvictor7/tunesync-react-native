import React from 'react'
import {StyleSheet, Text, View,Alert, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import { Card,ListItem,Icon } from 'react-native-elements'

class ExistingParties extends React.Component {
    
    joinAlert=(name)=>{
        Alert.alert(
          `${name}'s Party`,
          `Request ${name} to join party?`,
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
    }

    render() {
        const users = [
            {
                name: 'Get SUMM ',
                avatar: 'http://www.philly.com/resizer/bHw4bvIexfBozzYo6gSgV1vpEXk=/1400x932/center/middle/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/DBTWGCGWV5C7ZJBACNCBPOCUWE.jpg'
            },
             {
                name: 'Funky Fest',
                avatar: 'https://specials-images.forbesimg.com/imageserve/5b4501254bbe6f1becf1e1a5/416x416.jpg?background=000000&cropX1=0&cropX2=2995&cropY1=58&cropY2=3055'
            }, {
                name: 'Thirsty Thursday',
                avatar: 'https://amp.thisisinsider.com/images/5862cf76ba58c31d008b48c0-750-563.jpg'
            }, {
                name: 'Vodka-tasting party',
                avatar: 'http://thesource.com/wp-content/uploads/2013/10/Screen-Shot-2013-10-10-at-10.36.11-AM.png'
            }, {
                name: 'Game Night',
                avatar: 'https://vignette.wikia.nocookie.net/taylor-swift/images/c/ca/CfKA1lZUsAEoIHM.jpg/revision/latest?cb=20180422123124'
            },
            {
                name: 'Chad',
                avatar: 'https://pbs.twimg.com/media/BH-JMIvCYAAy81D.jpg'
            }, {
                name: 'Brad',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqTfH-qY2oEBH4F5JafCoYr5S9iO7u4aHxV7TCZuDUXeYY0Yo'
            },
            
           // more users here
        ]
        return (
            <View>
                <Text style={styles.text} h3>Click on friend to Join</Text>
                 <Card containerStyle={{padding: 0}} >
                      {users.map((u, i) => {
                          return (
                            <View key={i}>
                                <ListItem
                                  key={i}
                                  roundAvatar
                                  onPress={() => this.joinAlert(u.name)}
                                  title={u.name}
                                  avatar={{uri:u.avatar}}
                                />
                            </View>
                          )
                        })}
                    </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    users:{
        marginTop: 30
    },
    text: {
        marginLeft: 15
    }
})

export default withNavigation(ExistingParties)