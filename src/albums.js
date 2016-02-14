import React from 'react';
import AlbumShortened from './albumShortened.js';
import { albums } from './dataStore.js';
import { Link } from 'react-router';

export default class Albums extends React.Component {
    render() {
        return (
            <div>
                {
                    albums().map( album => {
                        return (
                            <Link to={"/" + album}>
                                <AlbumShortened name={album} />
                            </Link>
                        )
                    })
                }
            </div>

        );
    }
}
