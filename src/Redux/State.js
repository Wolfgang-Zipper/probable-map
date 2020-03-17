import dataSet from "./Data.js"



let store = {

  getState () {
    return this._state;
  },
  _state: {
    Dialogs_main: {
      dialogsData: [
        {id: 1, name: 'Сергей'},
        {id: 2, name: 'Виталий'},
        {id: 4, name: 'Димон'}
      ],
      messagesData: [
        {id: 1, name: 'Сергей', date_massege: '29.12.2020', text_massage: 'Hello'},
        {id: 2, name: 'Виталий', date_massege: dataSet(), text_massage: 'Hi'},
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
        {id: 1, name: 'Сергей', post_date: '29.12.2020', post_text: 'Hello', like: 45}
      ],
      newPostText:''


    }
  },
  //функция приравнена к "observer" и выполняет функцию обновления
  _rerenderTree  ()  {
  },
  // получает значение из вне и
  subscribe (observer) {
    this._rerenderTree = observer;
  },


  dispatch (action) {
    //функция добавления новых данных из функции newPost в state.Body.postDate
    if (action.type === 'addnewPost'){

      let newPost = {
        id: 7,
        name: 'Семен',
        post_date: dataSet(),
        post_text: this._state.Body.newPostText,
        like: 0
      };

      this._state.Body.postDate.push(newPost);
      this._state.Body.newPostText=""; //"очищаем" state.Body.newPostText, которое передается в поле ввода UI
      this._rerenderTree(this._state); //перерисовываем страницу для отображения внесенных изменений
    }
    //функция обновления данных "newPostText", которая получает "textMessage" при вызове через props из UI в Posts.js и приравнивает к textMessage
    else if (action.type === 'changePostText') {
      this._state.Body.newPostText = action.textMessage;
      this._rerenderTree(this._state); //перерисовываем страницу для отображения внесенных изменений
    }
    //функция добавления новых данных из функции newMess в state.Dialogs_main.newMessText
    else if (action.type === 'addnewMess'){
      let newMess = {
        id: 3,
        name: 'Димон',
        date_massege: '18.12.2019',
        text_massage: this._state.Dialogs_main.newMessText
      }
      this._state.Dialogs_main.messagesData.push(newMess);
      this._state.Dialogs_main.newMessText="";
      this._rerenderTree(this._state); //перерисовываем страницу для отображения внесенных изменений

    }
    //функция обновления данных "newMessText", которая получает "textMessage" при вызове через props из UI в Messages.js и приравнивает к textMessage

    else if (action.type === 'changeMessText') {
      this._state.Dialogs_main.newMessText = action.textMessage;
      this._rerenderTree(this._state); //перерисовываем страницу для отображения внесенных изменений
    }
  }



}
export default store;
