import axios from "axios";

const api = axios.create({
    baseURL: 'https://autorizacao-maickeen.herokuapp.com',
});

export default api;