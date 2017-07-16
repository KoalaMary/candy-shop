import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import basketReducer from './Basket/reducer';
import productReducer from './Catalog/reducer';

export default combineReducers({
    routing: routerReducer,
    basket: basketReducer,
    products: productReducer
});