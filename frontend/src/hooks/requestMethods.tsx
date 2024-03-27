import axios from 'axios'

const BASE_URL = 'https://ssaida-back.duckdns.org/api'
axios.defaults.withCredentials = true

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})
