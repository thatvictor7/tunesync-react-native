import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

import TabBarIcon from '../components/TabBarIcon';
import PartyScreen from '../screens/PartyScreen';
import MusicSearch from '../screens/MusicSearch';
import MediaPlayerScreen from '../screens/MediaPlayerScreen';
import Playlist from '../screens/QueuScreen'

const PartyStack = createStackNavigator({
  Home: PartyScreen,
});

PartyStack.navigationOptions = {
  tabBarLabel: 'Home',
  
  tabBarIcon: ({ focused }) => (
    <Icon
      type='font-awesome'
      name='users' />
  ),
};

const PlaylistStack = createStackNavigator({
  Links: Playlist,
});

PlaylistStack.navigationOptions = {
  tabBarLabel: 'Playlist',
  tabBarIcon: ({ focused }) => (
  <Icon
      type='material-icons'
      name='queue-music' / >
  ),
};

const MusicSearchStack = createStackNavigator({
  Links: MusicSearch,
});

MusicSearchStack.navigationOptions = {
  tabBarLabel: 'Music',
  tabBarIcon: ({ focused }) => (
  <Icon
      type='font-awesome'
      name='search' />
  
  ),
};

const MediaPlayerStack = createStackNavigator({
  Settings: MediaPlayerScreen,
});

MediaPlayerStack.navigationOptions = {
  tabBarLabel: 'Player',
  tabBarIcon: ({ focused }) => (
   <Icon
      type='font-awesome'
      name='music' />
  
  ),
};

export default createBottomTabNavigator({
  PartyStack,
  MusicSearchStack,
  PlaylistStack,
  MediaPlayerStack,
});
