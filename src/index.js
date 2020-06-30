import React, {Component} from 'react'
import {gotData, setInput, clearInput} from './actions/actions'
import ReactDOM from 'react-dom'
import reducers from './actions/reducers.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import axios from 'axios'
import App from './components/App'
import store from './actions/reducers'

const app = document.getElementById('app')
console.log(store.getState())


ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    app,
)