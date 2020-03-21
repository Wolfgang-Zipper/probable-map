import dataSet from "./Data.js"
const addnewMess = 'addnewMess';
const changeMessText = 'changeMessText';
const dialogs_main_redusor = (action, state) => {
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
export default dialogs_main_redusor;
