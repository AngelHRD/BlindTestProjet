import axios from 'axios';

const ApiRequest = axios.create({
    baseURL: 'https://technociteprojetblindtest.ew.r.appspot.com/',
});

export default ApiRequest;
