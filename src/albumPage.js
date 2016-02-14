import React from 'react';
import Album from './album.js';
import { add } from './dataStore.js'

export default class AlbumPage extends React.Component {
    constructor(props){
        super(props)
        this.state = { song: "" };
        this.handleChange = this.handleChange.bind(this);
        this.addSong = this.addSong.bind(this);
    }

    handleChange(event) {
        this.setState({ song: event.target.value });
    }

    addSong(){
        add({
            albumName: this.props.params.album,
            songName: this.state.song,
        });
        this.setState( { song: "" } );
    }

    render(){
        return (
            <div>
                <Album name={this.props.params.album} />
                <span>new song:</span> <input type="text" value={this.state.song} onChange={this.handleChange}/>
                <input type="submit" value="submit" onClick={this.addSong} />
            </div>
        );
    }
}
