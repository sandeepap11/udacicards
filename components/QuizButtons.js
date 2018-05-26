import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';

export default class Card extends Component {

    render() {

        const { onPress } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosCorrectBtn : styles.AndroidCorrectBtn}
                    onPress={() => onPress(true)}>
                    <Text style={styles.submitBtnText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosIncorrectBtn : styles.AndroidIncorrectBtn}
                    onPress={() => onPress(false)}>
                    <Text style={styles.submitBtnText}>Incorrect</Text>
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