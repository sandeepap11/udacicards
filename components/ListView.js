import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import Deck from './Deck';
import { StackNavigator } from 'react-navigation';
import { getDecks, getDeck } from '../utils/fakeapi';


export default class ListView extends Component {


    render() {

        const { navigation } = this.props;
        console.log(this.props)
        const decks = getDecks("React");
console.log(decks);

        return (
            <View style={styles.container}>
                {
                    decks.map((deck) => (
                        <TouchableOpacity key={deck.id} onPress={()=> navigation.navigate('Deck',
                        { deck: deck, view: "" })}>
                        <Deck deck={deck} view="list" />
                        </TouchableOpacity>
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
        height: 100,
        width: 250,
    }
});