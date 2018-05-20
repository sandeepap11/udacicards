import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';
import Card from './Card';


export default class Quiz extends Component {

    state = {
        cardNumber: 0
    };

    onPressCorrect = () => {

        if (this.state.cardNumber < this.props.deck.questions.length - 1) {
            this.setState((prevState) => ({ cardNumber: prevState.cardNumber + 1 }));

        }
        else {
            // Show results
        }
    };

    render() {
        const { cardNumber } = this.state;
        const { deck } = this.props;
        let count = 0;
        console.log("Called from render ", this.state);
        return (
            <View style={styles.container}>
                <Text>{cardNumber + 1} / {deck.questions.length}</Text>
                <Card card={deck.questions[cardNumber]} />
                <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosCorrectBtn : styles.AndroidCorrectBtn}
                    onPress={this.onPressCorrect}>
                    <Text style={styles.submitBtnText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosIncorrectBtn : styles.AndroidIncorrectBtn}
                    onPress={this.onPress}>
                    <Text style={styles.submitBtnText}>Incorrect</Text>
                </TouchableOpacity>
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
