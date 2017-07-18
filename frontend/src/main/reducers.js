import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar conta',
            done: true
        }, {
            _id: 2,
            description: 'Reunão as 10am',
            done: false
        }, {
            _id: 3,
            description: 'Médico as 1pm',
            done: false
        }]
    })
})

export default rootReducers