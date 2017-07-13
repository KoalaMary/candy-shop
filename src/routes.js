import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app.js';
import Main from './main';
import Catalog from './catalog.js';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Main}/>
        <Route path='catalog' component={Catalog}/>
    </Route>
)