import axios from 'axios';


/*
    // Rodar com IPV4: json-server --watch -d 180 --host 10.10.1.125 db.json

*/

const api = axios.create({
    baseURL: 'https://10.10.1.125:3000/'
})