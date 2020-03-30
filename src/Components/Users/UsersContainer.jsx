import React from 'react';
import Users from './Users.jsx'
import {connect} from 'react-redux'
import {followAC, unfollowAC, setUsersAC, getUsersCountAC, setCurrentPageAC} from '../../Redux/users_redusor'
let mapStateToProps = (state) => {
  return{
    users: state.Users.users,
    pageNumber: state.Users.pageNumber,
    userQuantity: state.Users.userQuantity,
    usersCount: state.Users.usersCount,
    pageNumbers: state.Users.pageNumbers
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
    },
    getUsersCount: (usersCount) => {
      dispatch(getUsersCountAC(usersCount))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
