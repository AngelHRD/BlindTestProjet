import axios from 'axios';

// https://technociteprojetblindtest.ew.r.appspot.com/
const ApiRequest = axios.create({
    baseURL: './../../db.json',
});

export default ApiRequest;
