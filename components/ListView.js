import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import Deck from './Deck';
import { StackNavigator } from 'react-navigation';
import { getDecks, getDeck } from '../utils/api';
import { white, black } from '../utils/colors';


export default class ListView extends Component {

    componentDidMount() {
        console.log("Mount");
        getDecks().then(decks => {
            console.log(decks);

            this.setState({ decks })
        });

    };

    componentWillReceiveProps() {
        
        getDecks().then(decks => {
            console.log(decks);

            this.setState({ decks })
        });

    };

    

    state = {
        decks: []
    }
    render() {

        const { navigation } = this.props;
        const { decks } = this.state;

        console.log("decks", decks, typeof (decks));


        return (
            <View style={styles.container}>

                { decks.length > 0 && <FlatList style={{ flex: 1 }}
                    data={decks}
                    renderItem={
                        ({ item }) => (
                            <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('Deck',
                                { deck: item, view: "" })}>
                                <Deck deck={item} view="list" />
                            </TouchableOpacity>
                        )}
                    keyExtractor={(item) => (item.id + item.title).toString()}
                    /> }

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

    },
    block: {
        borderColor: black,
        borderBottomWidth: .5
    }
});