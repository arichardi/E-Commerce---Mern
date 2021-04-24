import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Products from '../components/Products'
import axios from 'axios'


const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        axios.get('/api/products')
            .then( response => setProducts(response.data))
            .catch( err => console.log(err))

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
