import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { addDeck, generateId } from '../utils/api';
import { white, black, gray, green, purple, red } from '../utils/colors';

export default class AddDeck extends Component {

    
    updateText = (deckTitle) => {
        this.setState({
            deckTitle
        });
    }

    addToDecks = () => {
        console.log("€€€");
        const {navigation} = this.props;
        
        console.log(this.state.deckTitle);

        const deck = {
            id: generateId(),
            title: this.state.deckTitle,
            questions: []

        };
        addDeck(deck);
        console.log("seers 1");
        
        this.updateText("");
        console.log("seers 2");
        navigation.navigate('ListView');
        
        console.log("seers 3");
     };

     state = {
         deckTitle: ""
     };

    render() {


        return (
            <View>
                <Text style={styles.labelText}>Enter Title</Text>
                <TextInput
                    style={styles.textInput} value={this.state.deckTitle}
                    onChangeText= {(deckText) => this.updateText(deckText) }
                ></TextInput>
                
                <TouchableOpacity 
                style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}  
                onPress={this.addToDecks}>
                    <Text style={ styles.submitBtnText }>Add</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'

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
      marginTop: 4,
      justifyContent: 'center',
      marginTop: 100
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
      alignItems: 'center',
      marginTop: 100
    },
    submitBtnText: {
      color: white,
      fontSize: 22,
      textAlign: 'center',
    },
    textInput: {
        height: 50,
        width: Dimensions.get('window').width - 6,
        borderColor: gray,
        borderRadius: 4,
        borderWidth: 1,
        alignSelf: 'center',
        padding: 5,
        fontSize: 40
    },
    labelText: {
        color: gray,
        fontSize: 30,
        padding: 2,
        marginTop: 20
    }
});