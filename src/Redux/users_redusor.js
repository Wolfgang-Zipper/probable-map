const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const GET_COUNT_USER = "GET_COUNT_USER";
const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
const SET_PRE_LOADER = "SET_PRE_LOADER";
let iniState = {
  users: [],
  pageNumber: 1,
  userQuantity: 100,
  usersCount: 0,
  pageNumbers: 0,
  isFetching: false
}

let iniAction = {

}

const users_redusor = (state = iniState, action = iniAction) => {


  switch (action.type){
    case FOLLOW:
    return {
      ...state,
      users: state.users.map( u =>  {
        if (u.id === action.userID) {
          return {...u, followed: true}
        }
        return u;
      } )
    }
    case UNFOLLOW:
    return {
      ...state,
      users: state.users.map( u =>  {
        if (u.id === action.userID){
          return {...u, followed: false}
        }
        return u;
      } )
    }
    case SET_USERS:
    return {...state, users: action.users.items}
    case GET_COUNT_USER:
    return {...state, usersCount: action.usersCount}
    case SET_PAGE_NUMBER:
    return {...state, pageNumber: action.pageNumber}
    case SET_PRE_LOADER:
    return {...state, isFetching: action.isFetching}
    default: return state;

  }


}

export default users_redusor;

export const follow = (userID) => ({type: FOLLOW, userID });
export const unfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const getUsersCount = (usersCount) => ({type: GET_COUNT_USER, usersCount})
export const setCurrentPage = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber})
export const setPreLoader = (isFetching) => ({type: SET_PRE_LOADER, isFetching})
