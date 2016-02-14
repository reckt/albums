import { render } from 'react';
import { Router, Route, DefaultRoute } from 'react-router';
import { createHistory } from 'history';
import Albums from './albums.js';
import Album from './album.js';

let routes = <Router history={createHistory()}>
    <DefaultRoute path='/' component={Albums} />
    <Route path=':album' component={Album} />
</Router>

render( routes, document.getElementById('app') );
