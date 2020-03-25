import dataSet from "./Data.js"
const addnewMess = 'addnewMess';
const changeMessText = 'changeMessText';
let iniState = {
  dialogsData: [
    {id: 1, name: 'Сергей'},
    {id: 2, name: 'Виталий'},
    {id: 4, name: 'Димон'}
  ],
  messagesData: [
    {id: 1, name: 'Сергей', date_massege: '21.02.2020 17:09:41', text_massage: 'Hello'},
    {id: 2, name: 'Виталий', date_massege: dataSet(), text_massage: 'Hi'},
    {id: 3, name: 'Димон', date_massege: '21.02.2020 17:09:41', text_massage: 'ВКонтакте лучше'},
  ],
  newMessText:''
}

let iniAction = {

}
const dialogs_main_redusor = (state = iniState, action = iniAction) => {


  switch (action.type) {
    case addnewMess://функция добавления новых данных из функции newMess в state.Dialogs_main.newMessText
    let newMess = {
      id: 3,
      name: 'Димон',
      date_massege: dataSet(),
      text_massage: state.newMessText,
    }
    // рефакторинг заключался в том, что у меня обьявлялся newState который = state и он был равен обьекту сообщения, теперь обьект создается и возвращается одновременно.
    return {
      ...state,
      messagesData: [...state.messagesData, newMess], //messagesData это копия state.messagesData + добавленное сообщение
      newMessText: "" //сразу же зануляю строку
    };
    case changeMessText:  //функция обновления данных "newMessText", которая получает "textMessage" при вызове через props из UI в Messages.js и приравнивает к textMessage
    return {
      ...state,
      newMessText: action.textMessage
    }


    default:  return state;

  }

}
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

export default dialogs_main_redusor;
