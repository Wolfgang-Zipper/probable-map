import { API_REQ } from '../Components/API/API_REQ';
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const GET_COUNT_USER = "GET_COUNT_USER";
const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
const SET_PRE_LOADER = "SET_PRE_LOADER";
const FILTER_FOLLOW_PROGRESS = "FILTER_FOLLOW_PROGRESS";


let iniState = {
    users: [],
    pageNumber: 1,
    userQuantity: 100,
    usersCount: 0,
    pageNumbers: 0,
    isFetching: false,
    followProgress: []
}

let iniAction = {

}

const users_redusor = (state = iniState, action = iniAction) => {


    switch (action.type) {
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users.items }

        case GET_COUNT_USER:
            return { ...state, usersCount: action.usersCount }

        case SET_PAGE_NUMBER:
            return { ...state, pageNumber: action.pageNumber }

        case SET_PRE_LOADER:
            return { ...state, isFetching: action.isFetching }

        case FILTER_FOLLOW_PROGRESS:
            return {
                ...state,
                followProgress: action.isFetch ? [...state.followProgress, action.id]  : [state.followProgress.filter(id => id != action.id)] 
            }

        default: return state;

    }


}

export default users_redusor;

export const follow = (id) => ({ type: FOLLOW, id })
export const unfollow = (id) => ({ type: UNFOLLOW, id })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const getUsersCount = (usersCount) => ({ type: GET_COUNT_USER, usersCount })
export const setCurrentPage = (pageNumber) => ({ type: SET_PAGE_NUMBER, pageNumber })
export const setPreLoader = (isFetching) => ({ type: SET_PRE_LOADER, isFetching })
export const filterFollowProgress = (isFetch, id) => ({ type: FILTER_FOLLOW_PROGRESS, isFetch, id })

export const getUsersThunk = (pageNumber, userQuantity) => (dispatch) => {
    dispatch(setPreLoader(true))
    API_REQ.getUsers(pageNumber, userQuantity)
        .then(response => {
            dispatch(setUsers(response.data))
            dispatch(getUsersCount(response.data.totalCount))
            dispatch(setPreLoader(false))
        })
}

export const followThunk = (userId) => (dispatch) => {
dispatch(filterFollowProgress(true, userId))
    API_REQ.postFollow(userId)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(follow(userId));
        }
        dispatch(filterFollowProgress(false, userId));
        })
}

export const unfollowThunk = (userId) => (dispatch) => {
    dispatch(filterFollowProgress(true, userId))
    API_REQ.deleteFollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(userId));
            }
            dispatch(filterFollowProgress(false, userId));
        })
}