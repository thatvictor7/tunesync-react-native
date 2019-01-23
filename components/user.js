import React from 'react';
import { Image,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,View, } from 'react-native';
import { ButtonGroup,Buttons, Avatar,Badge,FormLabel } from 'react-native-elements'
import {withNavigation} from 'react-navigation';

const User = (props) => {
    const { partyCount } = props
        return (
            <View style={styles.user}>
                <Avatar
                    small
                    rounded
                    containerStyle={styles.avatar}
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                  />
                  <Badge
                    containerStyle={{ backgroundColor: '#0BD94D'}}
                    value={partyCount}
                    textStyle={{ color: 'white' }}
                  />
            </View>
        )
    
}

const styles = StyleSheet.create({
      avatar: {
              marginLeft: 15
          },
      user: {
          width: 40,
          flexDirection: 'row'
      }
})

export default withNavigation(User)