import React from 'react';
import {connect} from 'react-redux'
import {follow, unfollow, setUsers, getUsersCount, setCurrentPage, setPreLoader} from '../../Redux/users_redusor'
import Users from './Users.jsx'
import * as axios from 'axios';
import {Preloader} from '../Preloader.jsx'

class UsersAPI extends React.Component {

  componentDidMount() {
    this.props.setPreLoader(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.userQuantity}`)
      .then(response => {
        this.props.setUsers(response.data);
        this.props.getUsersCount(response.data.totalCount);
        this.props.setPreLoader(false);
      });

    }
    currPage = (currNumber) => {
        this.props.setPreLoader(true);
      this.props.setCurrentPage(currNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currNumber}&count=${this.props.userQuantity}`)
        .then(response => {
          this.props.setUsers(response.data);
          this.props.setPreLoader(false);
        })
      }
      render() {

        if (!this.props.isFetching)  return <Users
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        users={this.props.users}
        currPage={this.currPage}
        usersCount={this.props.usersCount}
        userQuantity={this.props.userQuantity}/>
        else {
          return <Preloader/>
        }

      }
    }

    let mapStateToProps = (state) => {
      return{
        users: state.Users.users,
        pageNumber: state.Users.pageNumber,
        userQuantity: state.Users.userQuantity,
        usersCount: state.Users.usersCount,
        pageNumbers: state.Users.pageNumbers,
        isFetching: state.Users.isFetching
      }
    }

    // let mapDispatchToProps = (dispatch) => {
    //   return{
    //     follow: (userID) => {
    //       dispatch(followAC(userID))
    //     },
    //     unfollow: (userID) => {
    //       dispatch(unfollowAC(userID))
    //     },
    //     setUsers: (users) => {
    //       dispatch(setUsersAC(users))
    //     },
    //     getUsersCount: (usersCount) => {
    //       dispatch(getUsersCountAC(usersCount))
    //     },
    //     setCurrentPage: (pageNumber) => {
    //       dispatch(setCurrentPageAC(pageNumber))
    //     },
    //     setPreLoader: (isFetching) => {
    //       dispatch(setPreLoaderAC(isFetching))
    //     }
    //   }
    // }

    const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, getUsersCount, setCurrentPage, setPreLoader})(UsersAPI);

    export default UsersContainer;
