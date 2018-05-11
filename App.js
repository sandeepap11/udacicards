import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';
import ListView from './components/ListView';
import Dummy from './components/Dummy';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ListView/>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  },
});
