import {connect} from 'react-redux'
import React from 'react'

const Home = (props) => {
    return(
        <div>
            <h1>Welcome to ACME PRODUCTS!</h1>
        </div>
    )
}
const mapState = (state) => {
    return {
        state
    }
}


export default connect(mapState)(Home)