import axios from 'axios';

const instance = axios.create({
    baseURL:"https://tinder-clone-backend-nodejs-11.herokuapp.com"
});

export default instance