import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { addDeck } from '../utils/api';
import { generateId } from '../utils/helpers';
import { white, black, gray, purple } from '../utils/colors';

export default class AddDeck extends Component {


    updateText = (deckTitle) => {
        this.setState({
            deckTitle
        });
    }

    addToDecks = () => {
        const { navigation } = this.props;

        const deck = {
            id: generateId(),
            title: this.state.deckTitle,
            questions: []

        };
        addDeck(deck);

        this.updateText("");
        navigation.navigate('ListView');

    };

    state = {
        deckTitle: ""
    };

    render() {
        const { deckTitle } = this.state;

        return (
            <View>
                <Text style={styles.labelText}>Enter Title</Text>
                <TextInput
                    style={styles.textInput} value={deckTitle}
                    onChangeText={(deckText) => this.updateText(deckText)}
                ></TextInput>

                {deckTitle.length > 0 && <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                    onPress={this.addToDecks}>
                    <Text style={styles.submitBtnText}>Add</Text>
                </TouchableOpacity>}


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
    iosSubmitBtn: {
        backgroundColor: black,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        borderColor: black,
        borderWidth: 1,
        marginTop: 4,
        justifyContent: 'center',
        marginTop: 100
    },
    AndroidSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    textInput: {
        height: 60,
        width: Dimensions.get('window').width - 6,
        borderColor: gray,
        borderRadius: 4,
        borderWidth: 1,
        alignSelf: 'center',
        padding: 5,
        fontSize: 40,
        backgroundColor: white
    },
    labelText: {
        color: gray,
        fontSize: 30,
        padding: 2,
        marginTop: 20
    }
});