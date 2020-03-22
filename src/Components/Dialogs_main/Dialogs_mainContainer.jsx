import React from 'react';
import Dialogs_main from './Dialogs_main.jsx'
import {actionaddPostcreator, actionchangeMessTextcreator} from '../../Redux/dialogs_main_redusor.js';
const Dialogs_mainContainer = (props) =>{


let onChangeMess = (text) => {

  props.dispatch(actionchangeMessTextcreator(text));//помещает из поля ввода input значения,
}
let addPost = () => {
  props.dispatch(actionaddPostcreator()); //вызов функции, проброшенной через props из "BLL" (добавляет данные сообщения в "state" взятые из того же "state",
                      //которые были добавлены туди из функции передачи ввода "onCgangeMess")
};
debugger
  return(
      <Dialogs_main onChangeMess={onChangeMess} addPost = {addPost} newMessText={props.state.Dialogs_main.newMessText}  messagesData={props.state.Dialogs_main.messagesData}  />
  )
  debugger
}
export default Dialogs_mainContainer;
