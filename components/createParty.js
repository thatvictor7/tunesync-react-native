import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage,CheckBox } from 'react-native-elements'

class CreateParty extends React.Component {
    
    render() {
        return (
            <View>
                <FormLabel>Party Name</FormLabel>
                <FormInput onChangeText={console.log('a')}/>
                {/* <FormValidationMessage>Error message</FormValidationMessage> */}
                <CheckBox
                  title='Make Invitation Only'
                  checked={console.log('b')}
                />
            </View>
        )
    }
}

export default withNavigation(CreateParty)