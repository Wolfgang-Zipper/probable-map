const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
let iniState = {
  users: [
    {id: 1,
      name: 'Pavel Smirnow',
      followed: true,
      status: 'I am boss',
      location: {city:'Moscow', country:'Russia'},
      img: 'https://steamuserimages-a.akamaihd.net/ugc/862863922320868372/F5F39ED5D2D9AAB83BE5B7CDE9F21E91F9075C13/'
     },
    {id: 2,
      name: 'Sregey Zelenskiy',
      followed: false,
      status: 'I am boss too',
      location: {city:'Stavropol', country:'Russia'},
      img: 'https://sun1-84.userapi.com/c855416/v855416401/1ca372/wl_fgfKGcuw.jpg?ava=1'
    }
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
