import { combineReducers } from 'redux'

import {productListReducer, productDetailReducer} from './Products/productReducer'

//this combine multiple reducers

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer
})

export default rootReducer