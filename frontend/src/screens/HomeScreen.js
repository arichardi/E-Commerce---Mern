import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Products from '../components/Products'
import products from '../products'

const HomeScreen = () => {
    return (
        <>
         <h1>Latest Arts</h1>
         <Row>
             {products.map( (product) => {
                 return (
                 <Col sm={3} ms={6} lg={4} xl={3} >
                    <Products product={product} />
                 </Col>
             )})}
         </Row>
        </>
    )
}

export default HomeScreen
