import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { white, black, gray, green, purple, red } from '../utils/colors';

export default class Card extends Component {

    flip = () => {
        
        if(this.state.flipper === "Answer"){
            this.setState({flipper: "Question", value: this.props.card.answer});
        }
        else{
            this.setState({flipper: "Answer", value: this.props.card.question});
        }
       
    };

    state = {
        flipper : "Answer",
        value: this.props.card.question
    };

    componentWillReceiveProps(nextProps) {
        this.setState({flipper: "Answer", value: nextProps.card.question});
    }

    render() {

        const { card } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.question}>{ this.state.value }</Text>
                <Text style={styles.flipper} onPress={this.flip}>{this.state.flipper}</Text>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'flex-start'

    },    
    question: {
        color: black,
        fontSize: 50,
        textAlign: 'center',
        margin: 20
    },    
    flipper: {
        color: red,
        fontSize: 30,
        textAlign: 'center',
        margin: 20
    }
});