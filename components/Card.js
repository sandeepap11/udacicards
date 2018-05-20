import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity } from 'react-native';

export default class Card extends Component {

    showAnswer = () => {
        
        if(this.state.answer === "Answer"){
            this.setState({answer: this.props.card.answer});
        }
       
    };

    state = {
        answer : "Answer"
    };

    componentWillReceiveProps() {
        this.setState({answer : "Answer"});
    }

    render() {

        const { card } = this.props;

        return (
            <View>
                <Text>{ card.question }</Text>
                <Text onPress={this.showAnswer}>{this.state.answer}</Text>
                

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