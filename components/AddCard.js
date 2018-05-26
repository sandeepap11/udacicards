import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { addCard } from '../utils/api';
import { white, black, gray, purple, lightgray } from '../utils/colors';

export default class AddCard extends Component {


    /**
     * @description Sets the entered question
     * @param {string} question  
    **/
    updateQuestion = (question) => {
        this.setState({
            question
        });
    }
    
    /**
     * @description Sets the entered answer
     * @param {string} answer  
    **/
    updateAnswer = (answer) => {
        this.setState({
            answer
        });
    }

    /**
     * @description Add card to deck using question and answer values set in state 
    **/
    addCardToDeck = () => {
        const { navigation } = this.props;
        const { deck, onRefresh } = navigation.state.params;

        let questions = deck.questions;
        questions.push(
            {
                question: this.state.question,
                answer: this.state.answer
            }
        )
        const newDeck = {
            ...deck,
            questions

        };

        addCard(newDeck);

        onRefresh && onRefresh();

        navigation.navigate('Deck',
            { deck: deck });

    };

    state = {
        question: "",
        answer: ""
    };


    render() {

        const { question, answer } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.labelText}>Enter Question</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(question) => this.updateQuestion(question)}
                ></TextInput>
                <Text style={styles.labelText}>Enter Answer</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(answer) => this.updateAnswer(answer)}
                ></TextInput>
                {(question.length > 0 && answer.length > 0) &&
                    <TouchableOpacity
                        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                        onPress={this.addCardToDeck}>
                        <Text style={styles.submitBtnText}>Add</Text>
                    </TouchableOpacity>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightgray

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
        fontSize: 40,
        backgroundColor: white
    },
    labelText: {
        color: gray,
        fontSize: 30,
        padding: 2,
        marginTop: 10
    }
});