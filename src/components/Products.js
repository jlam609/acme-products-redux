import axios from 'axios'
import {TYPES, gotData, setInput, clearInput, deleteProduct} from '../actions/actions'
import {connect} from 'react-redux'
import React, {useEffect, useState} from 'react'
import store from '../actions/reducers.js'


const Products = ({state, handleClick}) => {
    const [products, setProducts] = useState()
    useEffect(() => {
        const fetchProducts = async() => {
        const products = (await axios.get('/api/products')).data.products
        store.dispatch(gotData(products))
        setProducts(products)
        }
        fetchProducts()
    }, [])
    return(
        <div className = 'products'>
            <h1>Products</h1>
            <ul className = 'list'>
            {products ? products.map((product, idx) => {
                return (
                <div key = {idx}>
                <li>{product.name}</li> 
                <button onClick = {(e) => handleClick(e,product.id, state)}>Destroy</button>
                </div>
                )
            }) : null}
            </ul>
        </div>
    )
}
const mapState = (state) => {
    return{
        state
    }
}
const mapDispatch = (dispatch) => {
    const handleClick = async(e, id, state) =>{
        e.preventDefault()
        await axios.delete(`/api/products/${id}`)
        const products = state.products.filter(product => product.id !== id)
        dispatch((deleteProduct(products)))
    }
    return{
        handleClick
    }
}


export default connect(mapState, mapDispatch)(Products)