const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')
const users = require('./data/users')
const products = require('./data/products')
const User = require('./models/userModels')
const Product = require('./models/productModels')
const Order = require('./models/orderModels')
const connectBD = require('./config/db')

dotenv.config()

connectBD()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id
        const sampleProducts = products.map( product => {
            return {... product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log(`Data imported !`.green.inverse)
        process.exit()

    } catch (err) {
        console.error(`${err}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log(`Data destroyed !`.red.inverse)
        process.exit()

    } catch (err) {
        console.error(`${err}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else {
    importData()
}