import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import Deck from './Deck';
import { StackNavigator } from 'react-navigation';
import { getDecks, getDeck } from '../utils/api';


export default class ListView extends Component {

    componentDidMount() {
        let decks = getDecks();
        this.setState({decks});
    };

    state = {
        decks: []
    }
    render() {

        const { navigation } = this.props;
        const {decks} = this.state;

        console.log("decks", decks);
        

        return (
            <View style={styles.container}>
                
                <FlatList style={{flex:1}}
                    data={decks}
                    renderItem={
                        ({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('Deck',
                                { deck: item, view: "" })}>
                                <Deck deck={item} view="list" />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                />
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