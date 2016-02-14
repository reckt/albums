import React from 'react';
import Album from './album.js';
import data from './dataStore.js'

export default class Albums extends React.Component {
    render(){
        return data.albums.map( album => {
            <Album name={album} />
        } )
    }
}
