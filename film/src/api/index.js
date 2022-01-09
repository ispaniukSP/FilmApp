import axios from 'axios'

export const filmPath = axios.create({
    baseURL: "http://www.omdbapi.com",
    headers: {
        "Content-Type": "application/json",
    },
    params:{
        apikey: "965b67f5",
    }
})