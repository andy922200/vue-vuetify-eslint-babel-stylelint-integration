import axios from 'axios'

// base urls
const BASE_URL = 'https://api.lyrics.ovh/v1/'

// requests settings
const lyricsRequest = axios.create({
    baseURL: BASE_URL
})

export const lyricsAPIs = {
    getASongLyric: data => {
        return lyricsRequest.get(`${data.artist}/${data.title}`)
    }
}
