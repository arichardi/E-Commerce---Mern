const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const productRoutes = require('./Routes/productRoutes')

dotenv.config()
connectDB()

app.get('/', (request, response) => {
    response.send("Api is running")
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))