import React from 'react';
import { songs } from './dataStore';

export default class Album extends React.Component {
    render(){
        return (
            <div>
                <span style={{
                    background: "whitesmoke",
                }}>
                    well this is a picture
                </span>
                <ul>
                    {
                        songs({
                            albumName: this.props.name,
                        }).map(song => {
                            return (
                                <li>
                                    song: {song}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        )
    }
}
