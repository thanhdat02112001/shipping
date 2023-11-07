import axios from "axios";

const token  = localStorage.getItem('user')

export const HTTP = axios.create({
  baseURL: 'http://shipping.com/api/',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
})