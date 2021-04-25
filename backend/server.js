const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const products = require('./data/products')

dotenv.config()
connectDB()

app.get('/', (request, response) => {
    response.send("Api is running")
})

app.get('/api/products', (request, response) => {
    response.json(products)
})

app.get('/api/products/:id', (request, response) => {
    const product = products.find( p => p._id === request.params.id)
    response.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))