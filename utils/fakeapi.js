let decks = {
    React: {
        id: 1,
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            },
            {
                question: 'Is React unidirectional?',
                answer: 'Nope'
            },
            {
                question: 'Can a function represent react component?',
                answer: 'Yes, when it is stateless. So no :P'
            },
            {
                question: 'Is Redux exclusively for React?',
                answer: 'No, it is kind of a design pattern'
            },
            {
                question: 'Do you know Redux Saga?',
                answer: 'Yeah, kind of'
            }
        ]
    },
    JavaScript: {
        id: 2,
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    CoffeeScript: {
        id: 3,
        title: 'CoffeeScript',
        questions: [
            {
                question: 'Is CoffeeScript Javascript?',
                answer: 'Hmmm. It is ... kind of ...'
            }
        ]
    },
    CoffreeScript: {
        id: 4,
        title: 'CoffeeScript',
        questions: [
            {
                question: 'Is CoffeeScript Javascript?',
                answer: 'Hmmm. It is ... kind of ...'
            }
        ]
    }
}

export const getDecks = () => ( Object.values(decks) );

export const getDeck = (id) => ( (decks[id]) );

export const addDeck = (deck) => {decks[deck.title] = deck}; 

export const addCard = (title, question) => {decks[title].questions.push(question)}; 