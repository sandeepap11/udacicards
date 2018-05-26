import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Platform, Dimensions } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { white, black, gray, green, purple, red } from '../utils/colors';

export default class Deck extends Component {

    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params;


        return {
            title: deck.title
        }
    }




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

                        <Text style={styles.deckSize}>{deck.questions.length} Cards</Text>
                    </TouchableOpacity>
                </Swipeout>



            </View>
        );
    }
}

const styles = StyleSheet.create({

    deck: {
        backgroundColor: white,
        height: 200,
        width: Dimensions.get('window').width
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