import axios from "axios"

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Chonthicha652115010/set-up',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    //recieve perPageand page to sent to the request url(postman)
    getEvents(perPage: Number, page: Number){
        return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
    },
    //recives the ID and get data
    getEvent(id: number) {
        return apiClient.get('/events/' + id)
    }
}