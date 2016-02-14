import React from 'react';
import data from './dataStore';

export default class Album extends React.Component {
    render(){
        return (
            <div>
                <div>
                    well this is a picture
                </div>
                <ul>
                    {
                        data.songs(this.props.name).map(song => {
                            <li>
                                song: {song}
                            </li>
                        })
                    }
                </ul>
            </div>

        )
    }
}
