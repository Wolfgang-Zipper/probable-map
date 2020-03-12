
let rerenderTree = () => {

}

let state = {
  Dialogs_main: {
    dialogsData: [
      {id: 1, name: 'Сергей'},
      {id: 2, name: 'Виталий'},
      {id: 4, name: 'Димон'},
      {id: 5, name: 'Сергей'},
      {id: 6, name: 'Павел'},
      {id: 7, name: 'Виктор'},
      {id: 8, name: 'Артем'},
      {id: 9, name: 'Димон'}
    ],
    messagesData: [
      {id: 1, name: 'Сергей', date_massege: '29.12.2020', text_massage: 'Hello'},
      {id: 2, name: 'Виталий', date_massege: '22.11.2018', text_massage: 'Hi'},
      {id: 3, name: 'Димон', date_massege: '18.12.2019', text_massage: 'ВКонтакте лучше'},
    ],
    newMessText:'123'
  },
  Body:{
    friendsData: [
      {id: 1, name: 'Сергей'},
      {id: 2, name: 'Виталий'},
      {id: 3, name: 'Димон'}
    ],
    postDate: [
      {id: 1, name: 'Сергей', post_date: '29.12.2020', post_text: 'Hello', like: 45},
      {id: 2, name: 'Виталий', post_date: '22.11.2018', post_text: 'Hi', like: 25},
      {id: 3, name: 'Димон', post_date: '18.12.2019', post_text: 'ВКонтакте лучше', like: 15},
      {id: 4, name: 'Антон', post_date: '18.12.2019', post_text: 'ВКонтакте не лучше', like: 154},
      {id: 5, name: 'Питон', post_date: '18.12.2019', post_text: 'лучше', like: 155},
      {id: 6, name: 'Додон', post_date: '18.12.2019', post_text: 'ВКонтакте лучше', like: 65}
    ],
    newPostText:''


  }
};




//функция добавления новых данных из функции newPost в state.Body.postDate
export let addnewPost = (postMessage) => {

  let newPost = {
    id: 7,
    name: 'Семен',
    post_date: '29.12.2020',
    post_text: state.Body.newPostText,
    like: 0
  };

  state.Body.postDate.push(newPost);
  changePostText(''); //"очищаем" state.Body.newPostText, которое передается в поле ввода UI
  rerenderTree(state); //перерисовываем страницу для отображения внесенных изменений

};

//функция обновления данных "newPostText", которая получает "textMessage" при вызове через props из UI в Posts.js и приравнивает к textMessage
export let changePostText = (textMessage) => {

  state.Body.newPostText = textMessage;
  rerenderTree(state); //перерисовываем страницу для отображения внесенных изменений
};




//функция добавления новых данных из функции newMess в state.Dialogs_main.newMessText
export let addnewMess = () => {
  let newMess = {
    id: 3,
    name: 'Димон',
    date_massege: '18.12.2019',
    text_massage: state.Dialogs_main.newMessText
  }
  state.Dialogs_main.messagesData.push(newMess);
  changeMessText('');
  rerenderTree(state); //перерисовываем страницу для отображения внесенных изменений

};

//функция обновления данных "newMessText", которая получает "textMessage" при вызове через props из UI в Messages.js и приравнивает к textMessage
export let changeMessText = (textMessage) => {

  state.Dialogs_main.newMessText = textMessage;
  rerenderTree(state); //перерисовываем страницу для отображения внесенных изменений
};

export const subscribe = (observer) =>{
  rerenderTree = observer;
}


export default state;
