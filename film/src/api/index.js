import axios from 'axios'

export const filmPath = axios.create({
    baseURL: `${process.env.REACT_APP_FILM_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
    params:{
        apikey: `${process.env.REACT_APP_FILM_API}`,
    }
})