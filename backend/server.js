const express = require('express')
const app = express()

const products = require('./data/products')

app.get('/', (request, response) => {
    response.send("Api is running")
})

app.get('/api/', (request, response) => {
    response.json(products)
})

app.get('/api/:id', (request, response) => {
    const product = products.find( p => p._id === request.params.id)
    response.json(product)
})

app.listen(5000, () => console.log('Server running on port 5000'))