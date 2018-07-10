const axios = require('axios')
const client = axios.create({
    baseUrl: '<endpoint-url>',
    headers: {
        authorization: '<api-key>',
        accept: 'application/vnd.api+json'
    }
})

client.get()