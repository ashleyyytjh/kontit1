import axios from 'axios';

const baseUrl = "https://cryptodire.kontinentalist.com"

export default axios.create({
    baseURL: baseUrl,
    withCredentials: false
})