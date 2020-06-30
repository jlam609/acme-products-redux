const TYPES = {
    GOT_DATA: 'GOT_DATA',
    SET_INPUT: 'SET_INPUT',
    CLEAR_INPUT:'CLEAR_INPUT',
    DELETE_PRODUCT:'DELETE_PRODUCT'
}

const gotData = (products) => ({
    type: TYPES.GOT_DATA,
    products
})

const setInput = (input) => ({
    type:TYPES.SET_INPUT,
    input
})

const clearInput = () => ({
    type:TYPES.CLEAR_INPUT,
})
const deleteProduct = (products) => ({
    type:TYPES.DELETE_PRODUCT,
    products
})

module.exports = {
    TYPES,
    gotData,
    setInput,
    clearInput,
    deleteProduct
}