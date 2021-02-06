import axios from 'axios'
const url = 'http://localhost:3001/'

export default class ApiClient {
    constructor(token, logoutFunction) {
        this.token = token;
        this.logoutFunction = logoutFunction
    }

    createUserAction(method, url, data) {
        return axios({
            method: method,
            url: url,
            headers: {
                authorization: this.token()
            },
            data
        })
        .catch(err => {
            if(err.response === 403) {
                this.logoutFunction()
                return Promise.reject()
            } else {
                throw err
            }
        })
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

    // create API call (post) to http://localhost:3001/
    createEvent(event) {
        return this.createUserAction('post', url, event)
    }
    // get events from database
    getEvents() {
        return this.createUserAction('get', url)
    }
    //delete event  from databse
    deleteEvent(id) {
        return this.createUserAction('delete', `${url}${id}`)
    }
}

