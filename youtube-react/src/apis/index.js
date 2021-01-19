import axios from 'axios'
const KEY = process.env.REACT_APP_YOUTUBE_API 

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})

export const fetchPopularData = async () => {
    return await youtube.get('/videos', {
        params: {
            part: 'snippet',
            maxResult: 40,
            key:KEY,
            resionCode: 'JP',
            type: 'video',
            chart: 'mostPopular'
        }
    })
}