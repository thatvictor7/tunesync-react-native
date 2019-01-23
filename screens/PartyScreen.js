import React from 'react';
import { Image,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,View, } from 'react-native';
import { WebBrowser } from 'expo';
import { ButtonGroup,Buttons, Avatar,Badge,FormLabel } from 'react-native-elements'
import ExistingParties from '../components/existingParties'
import CreateParty from '../components/createParty'
import User from '../components/user'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: 2,
      partyCount: 8
    }
  }

  updateIndex=(selectedIndex)=> {
    this.setState({
      selectedIndex
    })
  }

  render() {
    const buttons = ['Join Party', 'Create Party']
    const { selectedIndex } = this.state
    const logging = console.log('yes')
    // console.log(this.state.selectedIndex)
    return (
      <View style={styles.container}>
            <User partyCount={this.state.partyCount} />
            <ButtonGroup
              onPress={this.updateIndex}
              buttonStyle={styles.button}
              selectedIndex={selectedIndex}
              buttons={buttons}
              selectedButtonStyle={styles.selectedButtonStyle}
              textStyle={styles.buttonText}
              containerStyle={{height: 100}}
            />
    {this.state.selectedIndex === 0 ? <ExistingParties /> : console.log('no')}
    {this.state.selectedIndex === 1 ? <CreateParty /> : console.log('no')}
      </View>
    );
  }
  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '12%',
  },
  button:{
    backgroundColor: '#0B85E3',
    // marginTop: '15%',
    // color: 'rgba(0,0,0,0.4)'
  },
  buttonText:{
    color: '#fff'
  },
  selectedButtonStyle:{
    backgroundColor: '#0BE3A3'
  },
  avatar: {
    marginLeft: 15
  },
  contentContainer: {
    paddingTop: 30,
  },
  user: {
    width: 40,
    flexDirection: 'row'
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
