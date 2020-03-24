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
  newMessText:'12dd3'
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
      text_massage: state.newMessText
    }
    state.messagesData.push(newMess);
    state.newMessText="";
    return state;
    case changeMessText:  //функция обновления данных "newMessText", которая получает "textMessage" при вызове через props из UI в Messages.js и приравнивает к textMessage
    state.newMessText = action.textMessage;

    return state;
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
