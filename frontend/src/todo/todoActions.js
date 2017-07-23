import axios from 'axios'

const URL = 'http://127.0.0.1:3003/api/todo'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
             .then( resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }) )
             .then( resp => dispatch(search()) )
    }
}

export const markTask = (todo, task) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: task })
             .then( resp => dispatch(search()) )
    }
}

export const removeTask = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
             .then( resp => dispatch(search()) )
    }
}