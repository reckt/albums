let data = {
    album1: {
        songs: [ "song1", 'song2' ],
    },
    album2: {
        songs: [ "song1", 'song3' ],
    },
    album3: {
        songs: [ "song1", 'song2', 'song3' ],
    },
};

export function add ({
    albumName,
    songName,
}) {
    data[albumName].songs.push(songName);
    return true;
}

export function albums() {
    return Object.keys(data);
}

export function songs ({
    albumName,
}) {
    return data[albumName].songs;
}
