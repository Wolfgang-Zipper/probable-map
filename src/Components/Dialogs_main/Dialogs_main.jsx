import React from 'react';
import s from './Dialogs_main.module.css'
import Messages from './Messages/Messages.js'
import Dialogs from './Dialogs/Dialogs.js'
import {BrowserRouter, Route} from 'react-router-dom';
const Dialogs_main = (props) =>{

  return(
    <BrowserRouter>
    <div className={s.bod}>
    <Dialogs dialogsData={props.dialogsData}/>
    <Messages messagesData={props.messagesData} />
    </div>
    </BrowserRouter>
  )
}
export default Dialogs_main;