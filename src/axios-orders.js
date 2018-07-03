import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://project-myburger.firebaseio.com'
});

export default instance;