import axios from 'axios';

export const axiosGetWithHeader = (url) => axios({
    method: 'get',
    baseURL: `http://localhost:5000/api/${url}`,
    headers: { "authorization": "eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ" }
});

export const axiosPostWithHeader = (url, data) => axios({
    method: 'post',
    baseURL: `http://localhost:5000/api/${url}`,
    headers: { "authorization": "eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ" },
    data
});