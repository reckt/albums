import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import Albums from './albums.js';
import AlbumShortened from './albumShortened.js';

class app extends React.Component {
    render(){
        return this.props.children;
    }
}
let routes = <Router history={createHistory()}>
    <Route path='/' component={app}>
        <IndexRoute component={Albums} />
        <Route path='/:album' component={AlbumShortened} />
    </Route>
</Router>

React.render( routes, document.getElementById('app') );
