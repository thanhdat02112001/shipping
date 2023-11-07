import axios from 'axios'
let token  = localStorage.getItem('token')
export const HTTP = axios.create({
  baseURL: 'http://shipping.com/api/',
  headers: {
    Authorization: `Bearer ${token}`
  }
})