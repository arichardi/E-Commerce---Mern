const express = require('express')
const router = express.Router()

const Product = require('../models/productModels')

router.get('/', async (request, response) => {

    //mongoose syntax to find data
    try {
        const products = await Product.find({})
        response.json(products)
        
    } catch (error) {
        console.error(error)
    }

})

router.get('/:id', async (request, response) => {
    
    try {
        const product = await Product.findById(request.params.id)
        
        if(product){
        response.json(product)
        }else {
            response.status(404).json({message:'Product not found'})
        }    


    } catch (error) {
        console.error(error)
    }
})

module.exports = router