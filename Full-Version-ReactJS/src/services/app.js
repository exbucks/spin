import axios from 'axios'

export async function fetchLyrics(artist, song) {
    return await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}