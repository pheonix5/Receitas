import axios from 'axios';


/*
    // Rodar com IPV4: json-server --watch -d 180 --host seu ip db.json

*/

const api = axios.create({
    baseURL: 'http://192.168.1.9:3000/'
})

export default api;