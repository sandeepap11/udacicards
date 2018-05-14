import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';
import ListView from './components/ListView';
import Deck from './components/Deck';


const decks = [
  {id:"d1", name: "udacicards", cards:["c1", "c2", "c3", "c4", "c13"]},
  {id:"d2", name: "Capitals", cards:["c5", "c9", "c11", "c12", "c14"]},
  {id:"d3", name: "Lifestyle Choices", cards:["c6", "c7", "c8", "c10"]}
];

const cards = [ {id: "c1", question: "Is react fine?", answer: "Yes"}, 
                {id: "c2", question: "Are you fine?", answer: "No"},
                {id: "c3", question: "Is Tyler good?", answer: "Yes"}, 
                {id: "c4", question: "Is Richard good?", answer: "Lol"}, 
                {id: "c5", question: "Karnataka", answer: "Bengaluru"}, 
                {id: "c6", question: "Coloring or no", answer: "Hmm"},
                {id: "c7", question: "Is Behrouz Biriyani the best?", answer: "Ain't that bad"}, 
                {id: "c8", question: "Who's the boss?", answer: "A girl"}, 
                {id: "c9", question: "California", answer: "Sacramento"}, 
                {id: "c10", question: "What's the best beer?", answer: "Root beer"}, 
                {id: "c11", question: "Washington", answer: "Olympia"}, 
                {id: "c12", question: "New Zealand", answer: "Wellington"}, 
                {id: "c13", question: "Should state be mutated?", answer: "No"}, 
                {id: "c14", question: "Lebanon", answer: "Beirut"}
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
