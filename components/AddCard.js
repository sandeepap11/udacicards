import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity, TextInput } from 'react-native';
import { addCard } from '../utils/fakeapi';

export default class AddCard extends Component {

    updateQuestion = (question) => {
        this.setState({
            question
        });
    }

    updateAnswer = (answer) => {
        this.setState({
            answer
        });
    }

    addCardToDeck = () => {
        console.log("€€€");
        const {navigation} = this.props;
        const {deck} = navigation.state.params;
        

        const card = {
            
            question: this.state.question,
            answer: this.state.answer

        };
        console.log(card, deck.title);
        

        addCard(deck.title, card);
        navigation.navigate('Deck',
                                { deck: deck, view: "" })
        
     };

     state = {
         question: "",
         answer: ""
     };


    render() {


        return (
            <View>
                <Text>Enter Question</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText= {(question) => this.updateQuestion(question) }
                ></TextInput>
                <Text>Enter Answer</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText= {(answer) => this.updateAnswer(answer) }
                ></TextInput>
                <TouchableOpacity style={{ margin: 20 }} onPress={this.addCardToDeck}>
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