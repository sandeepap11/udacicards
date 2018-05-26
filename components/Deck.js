import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { white, black, gray, green, purple, red } from '../utils/colors';

export default class Deck extends Component {

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;


    return {
      title: deck.title
    }
  }

  render() {


    const { deck, view, navigation } = this.props;

    console.log("Rendering Deck");
   
    let deckValue, onRefresh = null;
    
    if(!deck){
      deckValue = navigation.state.params.deck;
    }
    else {
      deckValue = deck;
    }

    if(view !== "list") {
      console.log("not list");
      onRefresh = navigation.state.params.onRefresh;
      
    }

        

    return (
      <View key={deckValue.id} style={ view === "list" ? styles.deck : {flex:1}}>
        <Text style={styles.deckTitle}>{deckValue.title} </Text>
        <Text style={styles.deckSize}>{deckValue.questions.length} Cards</Text>
        { view !== "list" && <View style={{ marginTop: 200 }}>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
          onPress={()=> navigation.navigate('AddCard',
                        { deck: deckValue, onRefresh: onRefresh })}>
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
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center'

  },
  deck: {
    backgroundColor: white,
    height: 200,
    width: Dimensions.get('window').width
  },
  iosSubmitBtn: {
    backgroundColor: black,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    borderColor: black,
    borderWidth: 1,
    marginTop: 4
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckTitle: { 
    color: black, 
    textAlign: "center",
    fontSize: 60,
    margin: 20
  },
  deckSize: { 
    color: red, 
    textAlign: "center",
    fontSize: 40,
    margin: 20
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
});