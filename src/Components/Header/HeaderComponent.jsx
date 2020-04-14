import {withRouter} from 'react-router-dom'
import React from 'react';
import Header from './Header.jsx'
import { connect } from 'react-redux'
import { getUserData, getresultCode, getImg, getAuthThunk } from '../../Redux/login_redusor.js';
import { compose } from 'redux';



class HeaderAPI extends React.Component {
    componentDidMount() {
        
        this.props.getAuthThunk()
           

    }
    render() {

        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.Login
    }
}


export default compose (connect(mapStateToProps, { getUserData, getresultCode, getImg, getAuthThunk }),
withRouter) (HeaderAPI)