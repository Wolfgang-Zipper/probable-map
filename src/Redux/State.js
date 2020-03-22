
import dialogs_main_redusor from './dialogs_main_redusor.js'
import body_redusor from './body_redusor.js'



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
        {id: 1, name: 'Сергей', date_massege: '21.02.2020 17:09:41', text_massage: 'Hello'},
        {id: 2, name: 'Виталий', date_massege: '21.02.2020 17:09:41', text_massage: 'Hi'},
        {id: 3, name: 'Димон', date_massege: '21.02.2020 17:09:41', text_massage: 'ВКонтакте лучше'},
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
        {id: 1, name: 'Сергей', post_date: '21.02.2020 17:09:41', post_text: 'Hello', like: 45}
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
  this._state.Dialogs_main = dialogs_main_redusor(action, this._state.Dialogs_main);//разделяем функции диспатча при помощи Redusora, передаем в него action,
                                                                                    //который добавляется при пробросе через state в UI, приравнивакя в функцию, которая в итоге возвращает измененный state
  this._state.Body = body_redusor(action, this._state.Body);//разделяем функции диспатча при помощи Redusora, передаем в него action,
                                                           //который добавляется при пробросе через state в UI, приравнивакя в функцию, которая в итоге возвращает измененный state
  this._rerenderTree(this._state); //перерисовываем страницу для отображения внесенных изменений
  }



}
const addnewMess = 'addnewMess';
const changeMessText = 'changeMessText';
const addnewPost = 'addnewPost';
const changePostText = 'changePostText';

export const actionaddPostcreator = () => {
  return {
    type:addnewMess
  }
}
export const actionchangeMessTextcreator = (text) => {
  return {
    type:changeMessText, textMessage:text
  }
}

export default store;
