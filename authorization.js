const Authorization = process.env.BATTLERITE_TOKEN

const axios = require('axios')
const client = axios.create({
    baseURL: 'https://api.dc01.gamelockerapp.com',
    headers: {
        Authorization,
        Accept: 'application/vnd.api+json',
    }
})

client.get('/status').then(res => console.log(res.data)).catch(console.log)
