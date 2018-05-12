import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';
import ListView from './components/ListView';
import Deck from './components/Deck';


const decks = [
  {id:"d1", name: "udacicards", cards:["c1", "c2", "c3", "c4", "c13"]},
  {id:"d2", name: "Card Deck 1", cards:["c5", "c9", "c11", "c14"]},
  {id:"d3", name: "Lifestyle Choices", cards:["c6", "c7", "c8", "c10", "c12"]}
];

const cards = [{id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"},
  {id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"}
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
    
      <Deck deck={decks[0]}/>     
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
