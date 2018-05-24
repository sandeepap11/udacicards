import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';
import Card from './Card';
import QuizButtons from './QuizButtons';
import { white, black, gray, green, purple, red } from '../utils/colors';


export default class Quiz extends Component {

    state = {
        cardNumber: 0,
        quizView : true
        
    };

    correctAnswers = 0;

    onPress = (result) => {

        const { deck } = this.props.navigation.state.params;

        if(result) {
            this.correctAnswers ++;
        }

        if (this.state.cardNumber < deck.questions.length - 1) {
            this.setState((prevState) => ({ cardNumber: prevState.cardNumber + 1 }));

        }
        else {
            this.setState({ quizView: false });
        }
    };

    render() {
        const { cardNumber, quizView } = this.state;
        const { deck } = this.props.navigation.state.params;
        let count = 0;
        return (
            <View style={styles.container}>
            { quizView && <View style={styles.quiz}>
            <Text style={styles.status}>{deck.questions.length - cardNumber} / {deck.questions.length}</Text>
                <Card card={deck.questions[cardNumber]} />
                <QuizButtons onPress={this.onPress}/>
        </View> }
        { !quizView && <View style={styles.container}>
        <Text style={styles.normalText}>You got</Text>
        <Text  style={styles.result}>{this.correctAnswers}</Text>
        <Text style={styles.normalText}>correct</Text>
        <Text style={styles.normalResultText}>Result</Text>
        <Text  style={styles.percentage}>{Math.round(this.correctAnswers * 100 / deck.questions.length) }%</Text>
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
        justifyContent: 'flex-start'

    },
    status: {
        color: black,
        fontWeight: "800",
        textAlign: "left",
        fontSize: 20,
        margin: 20
    },
    deckText: {
        color: black,
        textAlign: "center",
        fontSize: 40,
        margin: 20
    },
    normalText: {
        color: gray,
        textAlign: "center",
        fontSize: 40,
        margin: 20
    },
    result: {
        color: black,
        fontWeight: "400",
        textAlign: "center",
        fontSize: 60,
        margin: 20
    },
    normalResultText: {
        color: gray,
        textAlign: "center",
        fontSize: 40,
        margin: 20,
        marginTop: 50
    },
    percentage: {
        color: black,
        fontWeight: "800",
        textAlign: "center",
        fontSize: 80,
        margin: 20
    }
});
