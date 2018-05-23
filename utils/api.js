import { AsyncStorage } from 'react-native'

const CARDS_STORAGE_KEY = 'Udacicards:decks';

export const generateId = () => Date.now().toString()


export const addDeck = (deck) => {

    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
        [deck.id]: deck
    }))
}

export const addCard = (deck) => {
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
        [deck.id]: deck
    }))
}

export const getDecks = () => AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(decks => Object.values(JSON.parse(decks)));

export function removeEntry(id) {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[id] = undefined
            delete data[id]
            AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
        })
}