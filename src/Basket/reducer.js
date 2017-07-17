import {ADD_TO_BASKET, DELETE_FROM_BASKET, CLEAN_BASKET, ADD_COUNT, SUBTRACT_COUNT} from '../constants';

const initialState = [];

export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            let isProductAdded = state.filter((product) => {
                return product.id === action.product.id
            });
            if (!isProductAdded.length) {
                let newProduct = Object.assign({}, action.product, {count: 1});
                return [...state, newProduct];
            } else {
                return state
            }
        case DELETE_FROM_BASKET:
            return state.filter((product) => product.id !== action.product.id);
        case CLEAN_BASKET:
            return [];
        case ADD_COUNT:
            let newState = state.map((product) => {
                if (product.id === action.product.id) {
                    product.count = ++product.count;
                    product.totalPrice = product.price * product.count;
                }
                return product
            });
            return newState;
        case SUBTRACT_COUNT:
            newState = [];
            state.map((product) => {
                if (product.id === action.product.id) {
                    product.count = --product.count;
                    product.totalPrice = product.price * product.count;
                }
                if (product.count !== 0) {
                    newState.push(product)
                }
            });
            return newState;
        default:
            return state
    }
}