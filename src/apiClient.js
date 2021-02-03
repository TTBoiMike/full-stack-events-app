import axios from 'axios'

const url = 'http://localhost:3001/'

export default class ApiClient {
    
    async signUp(username, password) {
        return await axios({
            method: 'post',
            url: `${url}signup`,
            data: {
                username,
                password
            }
        }) 
    }
}