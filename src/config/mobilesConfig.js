import { SERVER_URL } from './URL'
import axios from 'axios'

// getting all products
export const getMobiles = () => {
    return axios.get(SERVER_URL)
}

// for single product
export const getMobileById = (id) => {
    return axios.get(`${SERVER_URL}${id}`)
}

// add new product
export const addMobile = (data) => {
    return axios.post(SERVER_URL, data)
}

// delete product
export const deleteMobile = (id) => {
    return axios.delete(`${SERVER_URL}${id}`)
}

// update product
export const updateMobile = (id,data) => {
    return axios.put(`${SERVER_URL}${id}`, data)
}