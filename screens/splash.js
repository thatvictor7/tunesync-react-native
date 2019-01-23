import React from 'react'
import {withNavigation} from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native';

class Splash extends React.Component {
    signedUp=()=>{
        // console.log('test')
        // () => {
            return this.props.navigation.navigate('HomeScreen')
        // }
    }
    render() {
        return(
            <ScrollView style={styles.container}>
                <View style={styles.center}>
                    <Image style = {styles.logo}
                        source={require('../assets/images/tunesyncLogo.png')}
                    />
                    <FormLabel >Username</FormLabel>
                    <FormInput placeholder='Username' onChangeText={this.someFunction}/>

                    <FormLabel>Password</FormLabel>
                    <FormInput placeholder='Password' secureTextEntry={true} onChangeText={this.someFunction}/>
                    {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}

                    <Button
                        // buttonStyle={styles.button}
                        backgroundColor = '#0B85E3'
                        title='Login' 
                        onPress={() => this.props.navigation.navigate('Main')}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        // alignItems: 'center',
        // flexDirection: 'column',
        // justifyContent: 'center'
    },
    logo: {
        alignItems: 'center',
        width: 400,
        height: 80
    },
    center:{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '50%',
        paddingHorizontal: 10,
    },
    button: {
       backgroundColor: '#0B85E3'
    }
})

export default withNavigation(Splash)