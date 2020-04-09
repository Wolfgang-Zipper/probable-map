import React from 'react';
import Header from './Header.jsx'
import { connect } from 'react-redux'
import { getUserData, getresultCode, getImg } from '../../Redux/login_redusor.js';
import * as axios from 'axios';
import { API_REQ } from '../API/API_REQ.js';

class HeaderAPI extends React.Component {
    componentDidMount() {

        API_REQ.getAuth()
            .then(response => {

                let { id, email, login } = response.data.data;
                this.props.getUserData(id, email, login);

                this.props.getresultCode(response.data.resultCode);

                API_REQ.getProfile(response.data.data.id).then(res => {
                    this.props.getImg(res.data.photos.small);
                });

            });

       

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
const HeaderComponent = connect(mapStateToProps, { getUserData, getresultCode, getImg })(HeaderAPI);
export default HeaderComponent;
