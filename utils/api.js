import { AsyncStorage } from 'react-native'

const CARDS_STORAGE_KEY = 'Udacicards:decks';

// export const getDecks = () => ( Object.values(decks) );

export const getDeck = (id) => ( (decks[id]) );

// export const addDeck = (deck) => {decks[deck.title] = deck}; 

export const addCard = (title, question) => {decks[title].questions.push(question)}; 

export function fetchCalendarResults () {
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
      .then(formatCalendarResults)
  }
  
  export const addDeck = (deck) => {
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
      [deck.title]: deck
    }))
  }

  export const getDecks = () => ( AsyncStorage.getItem(CARDS_STORAGE_KEY)
  .then(decks => {
      console.log("api", decks);
      
    return decks}) );
