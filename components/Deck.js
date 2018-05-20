import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Platform } from 'react-native';

export default class Deck extends Component {


  onPress = () => {

  };

  render() {

    const { deck, view } = this.props;

    return (
      <View key={deck.id} style={styles.deck}>
        <Text style={styles.deckText}>{deck.title} </Text>
        <Text style={styles.deckText}>{deck.questions.length} Cards</Text>
        { view !== "list" && <View>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
          onPress={this.onPress}>
          <Text style={styles.submitBtnText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
          onPress={this.onPress}>
          <Text style={styles.submitBtnText}>Start Quiz</Text>
        </TouchableOpacity>
        </View> }
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
    backgroundColor: 'white',
    height: 200,
    width: 250,
  },
  iosSubmitBtn: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 2
  },
  AndroidSubmitBtn: {
    backgroundColor: "purple",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckText: { 
    color: 'black', 
    textAlign: "center",
    fontSize: 40,
    margin: 20
  },
  submitBtnText: {
    color: "black",
    fontSize: 22,
    textAlign: 'center',
  }
});