import React from 'react';
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, getUsersCount, setCurrentPage, setPreLoader, filterFollowProgress, getUsersThunk, followThunk, unfollowThunk } from '../../Redux/users_redusor'
import Users from './Users.jsx'
import { Preloader } from '../Preloader.jsx'
import { API_REQ } from '../API/API_REQ';

class UsersAPI extends React.Component {

    componentDidMount() {

        this.props.getUsersThunk(this.props.pageNumber, this.props.userQuantity) //функция умеет включать Прелоадер, делать запрос на сервер для получения пользователей, 
                                                                                 //передавать юзеров через коллбекфункцию, передавать количество юзеров и отключать прелоадер  

    }

    currPage = (currNumber) => {
        this.props.getUsersThunk(currNumber, this.props.userQuantity)
    }
    render() {

        if (!this.props.isFetching) return <Users
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            currPage={this.currPage}
            usersCount={this.props.usersCount}
            userQuantity={this.props.userQuantity}
            followProgress={this.props.followProgress}
            filterFollowProgress={this.props.filterFollowProgress}
            setPreLoader={this.props.setPreLoader}
            unfollowThunk={this.props.unfollowThunk}
            followThunk={this.props.followThunk}
        />
        else {
            return <Preloader />
        }

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.Users.users,
        pageNumber: state.Users.pageNumber,
        userQuantity: state.Users.userQuantity,
        usersCount: state.Users.usersCount,
        pageNumbers: state.Users.pageNumbers,
        isFetching: state.Users.isFetching,
        followProgress: state.Users.followProgress
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

const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, getUsersCount, setCurrentPage, setPreLoader, filterFollowProgress, getUsersThunk, followThunk, unfollowThunk})(UsersAPI);

export default UsersContainer;
