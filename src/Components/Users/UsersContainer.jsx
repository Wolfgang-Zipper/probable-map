import React from 'react';
import Users from './Users.jsx'
import {connect} from 'react-redux'
let mapStateToProps = (state) => {
  return{
    Users: state.Users
  }
}

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;
