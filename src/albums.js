import React from 'react';
import AlbumShortened from './albumShortened.js';
import { albums } from './dataStore.js';

export default class Albums extends React.Component {
    render() {
        return (
            <div>
                {
                    albums().map( album => {
                        return <AlbumShortened name={album} />
                    })
                }
            </div>

        );
    }
}
