import dataSet from "./Data.js"
const addnewPost = 'addnewPost';
const changePostText = 'changePostText';
const body_redusor = (action, state) => {
  //функция добавления новых данных из функции newPost в state.Body.postDate
  if (action.type === addnewPost){

    let newPost = {
      id: 7,
      name: 'Семен',
      post_date: dataSet(),
      post_text: state.newPostText,
      like: 0
    };

    state.postDate.push(newPost);
    state.newPostText=""; //"очищаем" state.Body.newPostText, которое передается в поле ввода UI

  }
  //функция обновления данных "newPostText", которая получает "textMessage" при вызове через props из UI в Posts.js и приравнивает к textMessage
  else if (action.type === changePostText) {
    state.newPostText = action.textMessage;

  }
  return state;
}
export default body_redusor;
