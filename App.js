import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';
import ListView from './components/ListView';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import { getDeck } from './utils/fakeapi';


export default class App extends Component {
  render() {
const deck = getDeck("React");
console.log(deck);

    return (
      <View style={styles.container}>
    
      <Quiz deck={deck}/>     
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
