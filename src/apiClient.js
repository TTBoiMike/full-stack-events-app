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
    // get user info
    getUser(id) {
        return this.createUserAction('get', `${url}user/${id}`)
    }
    // update user info
    updateUser(id, user) {
        return this.createUserAction('put', `${url}user/${id}`, user)
    }
    // create new event in database
    createEvent(event) {
        return this.createUserAction('post', url, event)
    }
    // get events from database
    getEvents() {
        return this.createUserAction('get', url)
    }
    // get event from database by id
    getEvent(id) {
        return this.createUserAction('get', `${url}${id}`)
    }
    //delete event  from databse
    deleteEvent(id) {
        return this.createUserAction('delete', `${url}${id}`)
    }
    // update event favourite status
    updateEvent(id, event) {
        return this.createUserAction('put', `${url}${id}`, event)
    }
}

