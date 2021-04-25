import { createStore, combineReducer, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducer({})

const initialState = {}

const store = createStore(reducer, initialState, applyMiddleware(thunk))

export default store