import {
    PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL
} from './productsTypes'

const productsInitialState = {
    loading: false,
    products: [],
    error: ''
}


export const productListReducer = ( state = productsInitialState, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: []}
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading : false, error: action.payload }
        default:
            return state
    }
}

const productDetailInitialState = {
    loading: false,
    product: { reviews: []},
    error: ''
}


export const productDetailReducer = ( state = productDetailInitialState, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state}
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading : false, error: action.payload }
        default:
            return state
    }
}

