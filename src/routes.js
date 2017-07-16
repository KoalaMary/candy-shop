import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app.js';
import Main from './Main/main';
import Catalog from './Catalog/catalog.js';
import Basket from './Basket/basket.js';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Main}/>
        <Route path='catalog' component={Catalog}/>
        <Route path='basket' component={Basket}/>
    </Route>
)