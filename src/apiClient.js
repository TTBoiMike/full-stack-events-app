import axios from 'axios'

const url = 'http://localhost:3001/'

export default class ApiClient {
    constructor(token, logoutFunction) {
        this.token = token;
        this.logoutFunction = logoutFunction
    }

    async logIn(username, password) {
        return await axios({
            method: 'post',
            url: `${url}auth`,
            data: {
                username,
                password
            }
        })
    }
    
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