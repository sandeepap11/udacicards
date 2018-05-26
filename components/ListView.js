import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Deck from './Deck';
import DeckData from './DeckData';
import { StackNavigator } from 'react-navigation';
import { getDecks, getDeck, removeEntry } from '../utils/api';
import { white, black, red } from '../utils/colors';


export default class ListView extends Component {

    refreshList = () => {
        getDecks().then(decks => {
            console.log(decks);

            this.setState({ decks })
        });

    };

    deleteDeck = (deckId) => {
        console.log("removin");

        removeEntry(deckId).then(
            () => this.refreshList()
        );


    };

    componentDidMount() {
        console.log("Mount");
        this.refreshList();

    };

    onRefresh = () => {
        console.log("Refresh");

        this.refreshList();
    };

    componentWillReceiveProps() {
        console.log("Receive Props");

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

                {decks.length > 0 && <FlatList style={{ flex: 1 }}
                    data={decks}
                    renderItem={
                        ({ item }) => (
                            <View>
                                <DeckData deck={item} onRefresh={this.onRefresh} navigation={navigation}
                                    onDelete={this.deleteDeck} />
                            </View>
                        )}
                    keyExtractor={(item) => (item.id + item.title).toString()}
                />}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center'

    }
});