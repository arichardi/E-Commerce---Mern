import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Products from '../components/Products'
import axios from 'axios'


const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')
            setProducts(data)
        }
        fetchProducts()

    } ,[])

    return (
        <>
         <h1>Latest Arts</h1>
         <Row>
             {products.map( (product) => {
                 return (
                 <Col key={product._id} sm={3} ms={6} lg={4} xl={3} >
                    <Products product={product} />
                 </Col>
             )})}
         </Row>
        </>
    )
}

export default HomeScreen
