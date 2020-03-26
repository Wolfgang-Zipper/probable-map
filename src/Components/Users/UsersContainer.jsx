import React from 'react';
import Users from './Users.jsx'
import {connect} from 'react-redux'
import {followAC, unfollowAC} from '../../Redux/users_redusor'
let mapStateToProps = (state) => {
  return{
    users: state.Users.users
  }
}
let mapDispatchToProps = (dispatch) => {
  return{
    follow: (userID) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID) => {
      dispatch(unfollowAC(userID))
    }
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
