import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Deck from './Deck';
import DeckData from './DeckData';
import { getDecks, removeEntry } from '../utils/api';
import { white, black, lightgray, red } from '../utils/colors';


export default class ListView extends Component {

    // List View of all decks


    /**
     * @description Get all decks from Async Storage
    **/
    refreshList = () => {
        getDecks().then(decks => {
            decks.sort((a, b) => b.id - a.id);
            this.setState({ decks })
        });
    };

    /**
     * @description Remove said deck and refresh list
    **/
    deleteDeck = (deckId) => {
        removeEntry(deckId).then(
            () => this.refreshList()
        );
    };

    componentDidMount() {
        this.refreshList();
    };

    componentWillReceiveProps() {
        this.refreshList();

    };

    state = {
        decks: []
    }
    render() {

        const { navigation } = this.props;
        const { decks } = this.state;

        return (
            <View style={styles.container}>
                {
                    decks.length === 0 &&
                    <View>
                        <Text style={styles.message}>There are no decks</Text>
                        <Text style={styles.message}>Use the "Add Deck" tab to add one</Text>
                    </View>
                }

                {
                    decks.length > 0 && <FlatList style={{ flex: 1 }}
                        data={decks}
                        renderItem={
                            ({ item }) => (
                                <View>
                                    <DeckData deck={item} onRefresh={this.refreshList} navigation={navigation}
                                        onDelete={this.deleteDeck} />
                                </View>
                            )}
                        keyExtractor={(item) => (item.id + item.title).toString()}
                    />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightgray,
        alignItems: 'center',
        justifyContent: 'center'

    },
    message: {
        color: red,
        fontSize: 20,
        textAlign: 'center'
    }
});