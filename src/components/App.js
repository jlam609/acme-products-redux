import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'
import Products from './Products'
import Home from './Home'
import Create from './Create'


const App = (props) => {
    return(
        <div>
        <BrowserRouter>
        <nav className ='tabs'>
            <Link to= '/'>Home</Link>
            <Link to= '/products/create'>Create Product</Link>
            <Link to= '/products'>Products</Link>
        </nav>
        <Switch>
            <Route path='/products/create'><Create/></Route>
            <Route path='/products'><Products/></Route>
            <Route exact path='/'><Home/></Route>
        </Switch>
        </BrowserRouter>
        </div>
    )
}   

export default connect()(App)