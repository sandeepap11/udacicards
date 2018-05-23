import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import ListView from './components/ListView';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';

const Tabs = createBottomTabNavigator({
  ListView: {
    screen: ListView,
    navigationOptions: {
      tabBarLabel: 'List View',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? "purple" : "white",
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? "white" : "purple",
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const Stack = createStackNavigator({
  Home: { screen: Tabs },
  Deck: {
    screen: Deck,
    navigationOptions: {
      
      headerTintColor: "red",
      headerStyle: {
        backgroundColor: "green"
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz",
      headerTintColor: "red",
      headerStyle: {
        backgroundColor: "green"
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "Add Card",
      headerTintColor: "red",
      headerStyle: {
        backgroundColor: "green"
      }
    }
  }
});

export default class App extends Component {
  render() {




    return (
      <View style={{ flex: 1 }}>

        <Stack />
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
