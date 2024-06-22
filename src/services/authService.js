import axios from 'axios';

const serverURL = process.env.REACT_APP_SERVER_URL;

const API = axios.create({baseURL: serverURL})

export const register = async (formData) => {
    let res = await API.post('/auth/register', formData)
    return res
}

export const login = async (formData) => {
    let res = await API.post("/auth/login" , formData);
    return res
}