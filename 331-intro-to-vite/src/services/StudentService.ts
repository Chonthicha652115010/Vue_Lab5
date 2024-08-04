import axios from "axios"

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Chonthicha652115010/set-up2',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getEvents(){
        return apiClient.get('/students')
    }
}