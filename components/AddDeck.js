import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity, TextInput } from 'react-native';
import { addDeck, generateId } from '../utils/api';

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
        navigation.navigate('Deck',
                                { deck: deck, view: "" })
        
     };

     state = {
         deckTitle: ""
     };

    render() {


        return (
            <View>
                <Text>Enter Title</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText= {(deckText) => this.updateText(deckText) }
                ></TextInput>
                
                <TouchableOpacity style={{ margin: 20 }} onPress={this.addToDecks}>
                    <Text>Add</Text>
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
    deck: {
        backgroundColor: 'white',
        height: 200,
        width: 250,
    },
    iosCorrectBtn: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 7,
        height: 45,
        width: 300,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 2
    },
    AndroidCorrectBtn: {
        backgroundColor: "green",
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        width: 300,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iosIncorrectBtn: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 7,
        height: 45,
        width: 300,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 2
    },
    AndroidIncorrectBtn: {
        backgroundColor: "red",
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        width: 300,
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
        color: "white",
        fontSize: 22,
        textAlign: 'center',
    }
});