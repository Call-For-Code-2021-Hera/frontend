import axios from "axios";

const api = axios.create({
    baseURL: 'https://usuario-maickeen.herokuapp.com',
});

export default api;