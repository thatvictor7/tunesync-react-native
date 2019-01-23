import React from 'react';
import { ScrollView, StyleSheet,View,Text,Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements'

export default class Playlist extends React.Component {
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
    const list = [
        {
            "name": "Ice Ice Baby",
            "img": "https://lh3.googleusercontent.com/X_W_6KkYR0nIgrUnOs7C9tdI1YIKfENzEMI-h94DbxHi6xbS-lvi3iX4jiZNy0PFVRCz6Gh69w=s1024-c-e100-rwu-v1",
            "artist": "Vanilla Ice",
            "album": "To The Extreme"
        },
        {
             "name": "SICKO MODE",
             "img": "https://downinthevalley.com/Photo/418459519694:500",
             "artist": "Travis Scott",
             "album": "ASTROWORLD"
         }, {
             "name": "Lucky You",
             "img": "https://lh3.googleusercontent.com/YzEO1DgdZtudYiMH3ngysatnMoQS8u5IZvbiI5S1OYg3n7amBp_NpZEw1g0buVUELSvsVeZLVA=s1024-c-e100-rwu-v1",
             "artist": "Eminem",
             "album": "Kamikaze"
         }, {
             "name": "Happier",
             "img": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Marshmello_and_Bastille_Happier.png/220px-Marshmello_and_Bastille_Happier.png",
             "artist": "Marshmello",
             "album": "Marshmello & Bastille"
         }
        ]
    return(
        <View>
            <List>
                {
    list.map((l) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.img}}
        key={`${l.name}  ${l.artist}`}
        title={l.name}
      />
    ))
  }
            </List>
        </View>
    )
}

}
styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    }
})