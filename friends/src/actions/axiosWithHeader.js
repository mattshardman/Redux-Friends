import axios from 'axios';

export const axiosWithHeader = axios({
    method: 'get',
    baseURL: "http://localhost:5000/api/friends",
    headers: { "authorization": "eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ" }
});