import {ADD_TO_BASKET, DELETE_FROM_BASKET, CLEAN_BASKET, ADD_COUNT, SUBTRACT_COUNT} from '../constants';

export function addToBasket(product) {
    return {
        type: ADD_TO_BASKET,
        product
    }
}

export function deleteFromBasket(product) {
    return {
        type: DELETE_FROM_BASKET,
        product
    }
}

export function cleanBasket() {
    return {
        type: CLEAN_BASKET
    }
}

export function addCount(product) {
    return {
        type: ADD_COUNT,
        product
    }
}

export function subtractCount(product) {
    return{
        type: SUBTRACT_COUNT,
        product
    }
}