import Axios from './caller.service'


let login = (credentials) => {
    return Axios.post('/auth/login', credentials)
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('accessToken')
}


let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}


let getToken = () => {
    return localStorage.getItem('token')
}


// Déclaration des serivces pour import
export const accountService = {
    login, saveToken, logout, isLogged, getToken
}