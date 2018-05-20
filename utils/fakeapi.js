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
    }
}

export const getDecks = () => ( Object.values(decks) );

export const getDeck = (id) => ( (decks[id]) );