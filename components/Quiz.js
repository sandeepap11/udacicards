import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';
import Card from './Card';
import QuizButtons from './QuizButtons';


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
            { quizView && <View style={styles.container}>
            <Text>{deck.questions.length - cardNumber} / {deck.questions.length}</Text>
                <Card card={deck.questions[cardNumber]} />
                <QuizButtons onPress={this.onPress}/>
        </View> }
        { !quizView && <View style={styles.container}>
        <Text>You got {this.correctAnswers} correct. That's {this.correctAnswers * 100 / deck.questions.length }%</Text>

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
