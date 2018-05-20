import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigator, createStackNavigator } from 'react-navigation';
import ListView from './components/ListView';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import { getDecks, getDeck } from './utils/fakeapi';



const Stack = createStackNavigator({
  ListAppView: { screen:  ListView},
  Deck: { screen: Deck ,
    navigationOptions: {
      title: "Deck",
      headerTintColor: "red",
      headerStyle: {
        backgroundColor: "green"
      }
    }},
    Quiz: { screen: Quiz ,
      navigationOptions: {
        title: "Quiz",
        headerTintColor: "red",
        headerStyle: {
          backgroundColor: "green"
        }
      }}
});

export default class App extends Component {
  render() {




    return (
      <View style={{flex: 1}}>
    
      <Stack/>     
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
