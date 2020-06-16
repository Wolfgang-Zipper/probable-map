import { profileAPI_REQ, statusAPI_REQ, authAPI_REQ } from '../Components/API/API_REQ';
import dataSet from "./Data.js"
const addnewPost = 'addnewPost';
const changePostText = 'changePostText';
const getPageUser = 'getPageUser';
const getProfileProgress = 'getProfileProgress';
const setLocalStatus = 'setLocalStatus';
const SessionUserId = 'SessionUserId';
let iniState = {
  stateProfFetch: false,
  status: [],
  sessionUserId: "",
  profile: null,
  friendsData: [
    { id: 1, name: 'Сергей' },
    { id: 2, name: 'Виталий' },
    { id: 3, name: 'Димон' }
  ],
  postDate: [
    { id: 1, name: 'Сергей', post_date: '21.02.2020 17:09:41', post_text: 'Hello', like: 45 }
  ],
  newPostText: ''


}
let iniAction = {

}
const body_redusor = (state = iniState, action = iniAction) => {

  let newState = { ...state }

  //функция добавления новых данных из функции newPost в state.Body.postDate
  if (action.type === addnewPost) {

    let newPost = {
      id: 7,
      name: newState.friendsData[0].name,
      post_date: dataSet(),
      post_text: newState.newPostText,
      like: 0
    };
    newState.postDate = [...state.postDate];
    newState.postDate.unshift(newPost);
    newState.newPostText = ""; //"очищаем" state.Body.newPostText, которое передается в поле ввода UI

  }
  //функция обновления данных "newPostText", которая получает "textMessage" при вызове через props из UI в Posts.js и приравнивает к textMessage
  else if (action.type === changePostText) {

    newState.newPostText = action.textMessage;


  }
  else if (action.type === getPageUser) {

    newState.profile = action.profile;


  }
  else if (action.type === getProfileProgress) {

    newState.stateProfFetch = action.state;


  }
  else if (action.type === setLocalStatus) {

    newState.status = action.status;


  }
  else if (action.type === SessionUserId) {

    newState.sessionUserId = action.userId;


  }
  return newState;
}
export const setSessionUserId = (userId) => ({ type: SessionUserId, userId })
export const setLocStatus = (status) => ({ type: setLocalStatus, status })
export const changePT = (text) => ({ type: changePostText, textMessage: text })
export const getPageU = (profile) => ({ type: getPageUser, profile })
export const addP = () => ({ type: addnewPost })
export const setgetProfileProgress = (state) => ({ type: getProfileProgress, state })
export const profileThunk = (userId, sessionUserId) => (dispatch) => {

  if (!userId) {
    userId = sessionUserId
  }

  profileAPI_REQ.getProfile(userId)
    .then(response => {
      dispatch(getPageU(response.data))
      dispatch(setgetProfileProgress(false))
    })
    statusAPI_REQ.getStatus(userId)  
    .then(response => {

      dispatch(setLocStatus(response.data))
    })
    authAPI_REQ.getAuth()
    .then(response => {


        dispatch(setSessionUserId(response.data.data.id))

        

    });
}
export const getAuthThunk = () => (dispatch) => {

 
    authAPI_REQ.getAuth()
    .then(response => {


        dispatch(setSessionUserId(response.data.data.id))

        

    });
}

export default body_redusor;

export const setStatusThunk = (status) => (dispatch) => {
  
  statusAPI_REQ.setStatus(status)
  .then(response => {
   if (response.data.resultCode === 0) {
    dispatch(setLocStatus(status))
  }
}

  )
}
