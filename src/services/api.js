import axios from 'axios';

const token = sessionStorage.getItem('token');

const ApiRequest = axios.create({
    baseURL: 'https://technociteprojetblindtest.ew.r.appspot.com/',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
});

// const ApiRequest = axios.create({
//     baseURL: 'http://localhost:3000/',
//     headers: token ? { Authorization: `Bearer ${token}` } : {},
// });

export default ApiRequest;
