const Authorization = process.env.BATTLERITE_TOKEN

const paramSerializer = require('qs').stringify
const axios = require('axios')
const client = axios.create({
    baseURL: 'https://api.dc01.gamelockerapp.com',
    headers: {
        Authorization,
        Accept: 'application/vnd.api+json'
    },
    paramSerializer
})

client.get('/shards/global/matches', { page: { limit: 5, offset: 3 }})
    .then(res => console.log(res.data))
    .catch(console.log)
