import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

const decks = [
    {id:"d1", name: "udacicards", cards:["c1", "c2", "c3", "c4", "c13"]},
    {id:"d2", name: "Card Deck 1", cards:["c5", "c9", "c11", "c14"]},
    {id:"d3", name: "Lifestyle Choices", cards:["c6", "c7", "c8", "c10", "c12"]}
];

const cards = [{id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"},
    {id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"}, {id: "c1"}
];

export default class ListView extends Component {
    

    render() {
        
      return (
        <View style={styles.container}>
        {
            decks.map((deck) => (
                <View key={deck.id}  style={styles.deck}>
                    <Text style={{color: 'white'}}>{deck.name} </Text>
                    <Text style={{color: 'white'}}>{deck.cards.length} </Text> 
                </View>
            ))
        }
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
    deck: {
        backgroundColor: 'purple',        
        height: 200,
        width: 250,
    }
  });