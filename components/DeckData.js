import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { white, black, lightgray, gray, red } from '../utils/colors';

export default class Deck extends Component {

    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params;

        return {
            title: deck.title
        }
    };

    render() {

        const { deck, navigation, onRefresh, onDelete } = this.props;

        let swipeBtns = [{
            text: 'Delete',
            backgroundColor: red,
            color: white,
            onPress: () => { onDelete(deck.id) }
        }];

        return (

            <View style={styles.deck}>
                <Swipeout right={swipeBtns}
                    autoClose={true}
                    backgroundColor='transparent'>
                    <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('Deck',
                        { deck, onRefresh, onDelete })}>
                        <Text style={styles.deckTitle}>{deck.title} </Text>
                        <Text style={styles.deckSize}>{deck.questions.length} 
                        {deck.questions.length === 1 ? " card" : " cards"}</Text>
                    </TouchableOpacity>
                </Swipeout>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    deck: {
        backgroundColor: lightgray,
        width: Dimensions.get('window').width,
        borderBottomWidth: 0.5,
        borderColor: black,
        padding: 0
    },
    block: {
        padding: 0,
        margin: 0,
        height: 200
    },
    deckTitle: {
        color: black,
        textAlign: "center",
        fontSize: 40,
        margin: 20
    },
    deckSize: {
        color: gray,
        textAlign: "center",
        fontSize: 30,
        margin: 20
    }
});