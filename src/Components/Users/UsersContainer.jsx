import React from 'react';
import Users from './Users.jsx'
import {connect} from 'react-redux'
import {followAC, unfollowAC, setUsersAC} from '../../Redux/users_redusor'
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
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
