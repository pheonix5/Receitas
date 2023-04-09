import axios from 'axios';


/*
    // Rodar com IPV4: json-server --watch -d 180 --host 10.10.1.125 db.json

*/

const api = axios.create({
    baseURL: 'http://192.168.1.10:3000'
})

export default api;