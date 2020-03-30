const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const GET_COUNT_USER = "GET_COUNT_USER";
const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
let iniState = {
  users: [],
  pageNumber: 1,
  userQuantity: 10,
  usersCount: 0,
  pageNumbers: 0
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
    default: return state;

  }


}

export default users_redusor;

export const followAC = (userID) => ({type: FOLLOW, userID });
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const getUsersCountAC = (usersCount) => ({type: GET_COUNT_USER, usersCount})
export const setCurrentPageAC = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber})
