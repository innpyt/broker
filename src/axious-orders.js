import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mybroker-38f07.firebaseio.com/'
});

export default instance;