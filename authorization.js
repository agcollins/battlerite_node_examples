const axios = require('axios')
const client = axios.create({
    baseUrl: '<endpoint-url>',
    headers: {
        Authorization: '<api-key>',
        Accept: 'application/vnd.api+json',
    }
})

client.get()