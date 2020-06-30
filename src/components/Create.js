import React from 'react'
import {connect} from 'react-redux'
import {TYPES, gotData, setInput, clearInput} from '../actions/actions'
import axios from 'axios'

const Create = ({state, handleChange, handleSubmit}) => {
    return (
        <div>
            <h1>Create Product!</h1>
            <div className = {'createBar'}>
            <input  value = {state.input} onChange = {(e) => handleChange(e)}></input>
            <button onClick = {(e) => handleSubmit(e, state.input)}>Add Product!</button>
            </div>
        </div>
    )
}
const mapState = (state) => {
    return{
        state
    }
}
const mapDispatch = (dispatch) => {
    const handleChange = (e) => {
        dispatch(setInput(e.target.value))
    }
    const handleSubmit = async (e, input) => {
        e.preventDefault()
        const product = (await(axios.post('/api/products', {
            name:input
        })))
        dispatch(clearInput(product))
    }
    return{
        handleChange,
        handleSubmit
    }
}
export default connect(mapState, mapDispatch)(Create)