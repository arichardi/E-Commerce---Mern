import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Products from '../components/Products'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listProducts} from '../redux/Products/productsAction'


const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector( (state) => state.productList)
    const { loading, error, products} = productList

    useEffect( () => {
        dispatch(listProducts())
    } ,[dispatch])

    return (
        <>
         <h1>Latest Arts</h1>
         { loading ? <Loader /> : error ? <Message>{error}</Message> : 
         <Row>
             {products.map( (product) => {
                 return (
                     <Col key={product._id} sm={3} ms={6} lg={4} xl={3} >
                    <Products product={product} />
                 </Col>
             )})}
         </Row>
            }
        </>
    )
}

export default HomeScreen
