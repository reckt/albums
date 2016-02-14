import React from 'react';
import { songs } from './dataStore';

export default class AlbumShortened extends React.Component {
    render(){
        return (
            <div style={{
                marginBottom: "0.5em"
            }}>
                <span style={{
                    background: "whitesmoke",
                }}>
                    well this is a picture
                </span> { " " }
                <span>
                    {this.props.name}: {songs({
                        albumName: this.props.name,
                    }).length} songs
                </span>
            </div>

        )
    }
}
