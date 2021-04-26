import { combineReducers } from 'redux'

import productListReducer from './Products/productReducer'

//this combine multiple reducers

const rootReducer = combineReducers({
    productList: productListReducer
})

export default rootReducer