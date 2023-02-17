import axios from 'axios';

export const APIHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': {
        toString () {
            return `Bearer ${localStorage.getItem('token')}`
        }
    }
};

export const API = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    //REACT_APP_BACK_URL=http://localhost:5000 esto tenéis que meterlo en un archivo .env
    timeout: 6000,
    headers: APIHeaders
});
