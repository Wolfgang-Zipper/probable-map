const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
let iniState = {
  users: [
    {id: 1, name: 'Pavel', followed: true, status: 'I am boss', location: {city:'Moscow', country:'Russia'} },
    {id: 2, name: 'Sregey', followed: false, status: 'I am boss too', location: {city:'Stavropol', country:'Russia'} }
  ]
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
    default: return state;
  }


}

export default users_redusor;

export const followAC = (userID) => ({type: FOLLOW, userID });
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
