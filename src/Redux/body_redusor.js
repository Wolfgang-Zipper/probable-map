import dataSet from "./Data.js"
const addnewPost = 'addnewPost';
const changePostText = 'changePostText';
let iniState = {
  friendsData: [
    {id: 1, name: 'Сергей'},
    {id: 2, name: 'Виталий'},
    {id: 3, name: 'Димон'}
  ],
  postDate: [
    {id: 1, name: 'Сергей', post_date: '21.02.2020 17:09:41', post_text: 'Hello', like: 45}
  ],
  newPostText:''


}
let iniAction = {

}
const body_redusor = (state = iniState, action = iniAction) => {

  let newState = {...state}

  //функция добавления новых данных из функции newPost в state.Body.postDate
  if (action.type === addnewPost){

    let newPost = {
      id: 7,
      name: newState.friendsData[0].name,
      post_date: dataSet(),
      post_text: newState.newPostText,
      like: 0
    };
    newState.postDate = [...state.postDate];
    newState.postDate.unshift(newPost);
    newState.newPostText=""; //"очищаем" state.Body.newPostText, которое передается в поле ввода UI

  }
  //функция обновления данных "newPostText", которая получает "textMessage" при вызове через props из UI в Posts.js и приравнивает к textMessage
  else if (action.type === changePostText) {

    newState.newPostText = action.textMessage;


  }
  return newState;
}
export const addnewPostActioncreator = () => {
  return {
    type: addnewPost
  }
}
export const changePostTextActioncreator = (text) => {
  return {
    type: changePostText,
    textMessage: text
  }
}
export default body_redusor;
