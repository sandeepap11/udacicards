import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Platform } from 'react-native';

export default class Deck extends Component {

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;


    return {
      title: deck.title
    }
  }

  onPress = () => {

  };

  render() {

    const { deck, view, navigation } = this.props;
    let deckValue = null;
    
    if(!deck){
      deckValue = navigation.state.params.deck;
    }
    else {
      deckValue = deck;
    }

        

    return (
      <View key={deckValue.id} style={ view === "list" ? styles.deck : {flex:1}}>
        <Text style={styles.deckText}>{deckValue.title} </Text>
        <Text style={styles.deckText}>{deckValue.questions.length} Cards</Text>
        { view !== "list" && <View>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
          onPress={()=> navigation.navigate('AddCard',
                        { deck: deckValue })}>
          <Text style={styles.submitBtnText}>Add Card</Text>
        </TouchableOpacity>
        {(deckValue.questions.length > 0) && 
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
          onPress={()=> navigation.navigate('Quiz',
                        { deck: deckValue })}>
          <Text style={styles.submitBtnText}>Start Quiz</Text>
        </TouchableOpacity>
        }
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
    width: 370,
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