import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import Albums from './albums.js';
import Album from './album.js';
import AlbumShortened from './albumShortened.js';

let routes = <Router history={createHistory()}>
    <Route path='/' component={Albums} />
    <Route path='/:album' component={Album} />
</Router>

React.render( routes, document.getElementById('app') );
