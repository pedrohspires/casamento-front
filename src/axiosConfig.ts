import axios from 'axios';
import { API_URL } from './utils/api';

const axiosInstance = (timeout: number = 10000) => {
    return axios.create({
        baseURL: API_URL,
        timeout: timeout,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export default axiosInstance;