import React from 'react';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import Albums from './albums.js';
import AlbumPage from './albumPage.js';

let routes = <Router history={createHistory()}>
    <Route path='/' component={Albums} />
    <Route path='/:album' component={AlbumPage} />
</Router>

React.render( routes, document.getElementById('app') );
