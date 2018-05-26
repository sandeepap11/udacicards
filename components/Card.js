import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity, Animated } from 'react-native';
import { white, black, gray, green, purple, red } from '../utils/colors';

export default class Card extends Component {


    flip = () => {
        const { value, bounceValue } = this.state;

        if (this.state.flipper === "Answer") {
            this.setState({ flipper: "Question", value: this.props.card.answer });
        }
        else {
            this.setState({ flipper: "Answer", value: this.props.card.question });
        }

        Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 1.5 }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4 })
        ]).start();
    };

    state = {
        flipper: "Answer",
        value: this.props.card.question,
        bounceValue: new Animated.Value(1)
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ flipper: "Answer", value: nextProps.card.question });
    }

    render() {

        const { card } = this.props;
        const { flipper, value, bounceValue } = this.state;

        return (
            <View style={styles.container}>
                <Animated.Text
                    style={[styles.question, { transform: [{ scale: bounceValue }] }]}>
                    {value}
                </Animated.Text>
                <Text style={styles.flipper} onPress={this.flip}>{flipper}</Text>

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
        margin: 20,
        height: 150
    },
    flipper: {
        color: red,
        fontSize: 30,
        textAlign: 'center',
        margin: 20
    }
});