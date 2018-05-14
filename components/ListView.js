import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Deck from './Deck';



export default class ListView extends Component {


    render() {

        const { decks } = this.props;

        return (
            <View style={styles.container}>
                {
                    decks.map((deck) => (
                        <Deck key={deck.id} deck={deck} view="list" />
                    ))
                }
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
        backgroundColor: 'purple',
        height: 200,
        width: 250,
    }
});