import actions, {TYPES} from './actions'
import {createStore} from 'redux'

const initialState = {
    products:[],
    input: ''
}
const reducers = (state = initialState, action) => {
    switch(action.type){
        case TYPES.GOT_DATA:
            return {
                ...state,
                products:action.products
            }
        case TYPES.SET_INPUT:
            return {
                ...state,
                input:action.input
            }
        case TYPES.CLEAR_INPUT:
            return {
                ...state,
                input:''
            }
        case TYPES.DELETE_PRODUCT:
            return {
                ...state,
                products:[...action.products],
            }
        default: 
            return state;
    }
}
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store