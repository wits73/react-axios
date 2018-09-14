import axios from 'axios';

export function getResult(target, keyword) {
    return axios.get('http://localhost:8000/info/'+ target + '/'  + keyword);
}