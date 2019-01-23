import React from 'react';
import { ScrollView, StyleSheet,View,Text,ActivityIndicator,Alert } from 'react-native';
import { SearchBar,Button,List,ListItem } from 'react-native-elements'

export default class MusicSearch extends React.Component {
  static navigationOptions = {
    title: 'Search Music',
  };
   constructor (props) {
    super(props)
    this.state = {
      search: '',
      displaySearch: false,
      timePassed: false
    }
  }

  joinAlert=(name)=>{
    Alert.alert(
      `Add Song To Playlist`,
      `Add ${name} to playlist?`,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
}

  loading(){
    return(
      <View style={[styles.container, styles.horizontal]}>
         {this.state.timePassed ? <ActivityIndicator size="large" color="#0BD94D" /> : null}
      </View>
    )
  }

  saveText(input){
    // input.preventDefault()
    this.setState({search:input})
  }

  results(listMusic) {
    console.log(this.state)
    return(
      <List>
          {this.state.displaySearch ? 
            listMusic[0][this.state.search] === undefined ? this.loading() : listMusic[0][this.state.search].map((item, i) => (
              
              <ListItem
                key={i}
                onPress={() => this.joinAlert(`${item.name}`)}
                title={`  ${item.name}`}
                leftIcon={{name: item.icon}}
                avatar={{uri:item.img}}
                subtitle={
                    <View style={styles.subtitleView}>
                      <Text>{item.artist}</Text>
                      <Text style={styles.ratingText}>{item.album}</Text>
                    </View>
                }
              />
            )) : this.loading()
          }
            </List>
    )
  }

  clicked() {
    this.setState({ timePassed: true })
    setTimeout(() => {this.setState({displaySearch: true})}, 2700);
    // console.log(this.state)
  }

  render() {
    const list = require('../music.json')
    // console.log(music[0]["Thriller"])
    return (
      <ScrollView style={styles.container}>
        <SearchBar
          lightTheme
          value={this.state.search}
          onChangeText={(search) => this.saveText(search)}
          // onClearText={(e) => e.preventDefault()}
          
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Type Here...' />
        <Button
          // small
          buttonStyle={styles.button}
          onPress={() => this.clicked()}
          title='Search' />
          {this.results(list)}
          {/* <List>
              {this.state.displaySearch ? 
                list[0]["ice ice"].map((item,i) => (
                  
                  <ListItem
                    key={i}
                    title={`  ${item.name}`}
                    leftIcon={{name: item.icon}}
                    avatar={{uri:item.img}}
                    subtitle={
                        <View style={styles.subtitleView}>
                          <Text>{item.artist}</Text>
                          <Text style={styles.ratingText}>{item.album}</Text>
                        </View>
                    }
                  />
                )) : this.loading()
              }
            </List> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  button:{
    width: '100%',
    backgroundColor: '#0B85E3'
  },
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
});
