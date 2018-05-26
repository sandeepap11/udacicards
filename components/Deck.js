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

  deleteDeck = () => {

    const {navigation} = this.props;
    const {deck, onRefresh, onDelete} = navigation.state.params;

    onDelete(deck.id);

    navigation.navigate('ListView');
  };


  render() {

    const {navigation} = this.props;

    const {deck, onRefresh, onDelete} = navigation.state.params;
   

        

    return (
      
      <View style={{flex:1}}>
      
        <Text style={styles.deckTitle}>{deck.title} </Text>
        
        <Text style={styles.deckSize}>{deck.questions.length} Cards</Text>
        <View style={{ marginTop: 140 }}>
        <TouchableOpacity
          style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn, 
        {backgroundColor: green}]}
          onPress={()=> navigation.navigate('AddCard',
                        { deck, onRefresh })}>
          <Text style={styles.submitBtnText}>Add Card</Text>
        </TouchableOpacity>
        {
          (deck.questions.length > 0) && 
        <TouchableOpacity
          style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn, 
          {backgroundColor: black}]}
          onPress={()=> navigation.navigate('Quiz',
                        { deck })}>
          <Text style={styles.submitBtnText}>Start Quiz</Text>
        </TouchableOpacity>
        }
        <TouchableOpacity
        style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn, 
        {backgroundColor: red}]}
        onPress={this.deleteDeck}>
        <Text style={styles.submitBtnText}>Delete Deck</Text>
      </TouchableOpacity>
      
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  iosSubmitBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    borderWidth: 1,
    marginTop: 4
  },
  AndroidSubmitBtn: {
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