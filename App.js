import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';
import ListView from './components/ListView';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import { getDecks, getDeck } from './utils/fakeapi';


export default class App extends Component {
  render() {
const decks = getDeck("React");
console.log(decks);

    return (
      <View style={styles.container}>
    
      <Quiz deck={decks}/>     
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
