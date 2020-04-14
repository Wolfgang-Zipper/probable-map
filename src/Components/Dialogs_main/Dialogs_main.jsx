import React from 'react';
import s from './Dialogs_main.module.css'
import Messages from './Messages/Messages.js'
import Dialogs from './Dialogs/Dialogs.js'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
const Dialogs_main = (props) => {
 
    return (
      <BrowserRouter>
        <div className={s.bod}>
          <Dialogs dialogsData={props.Dialogs_main.dialogsData} />
          <Messages onChangeMess={props.onChangeMess} addPost={props.addPost} newMessText={props.Dialogs_main.newMessText} messagesData={props.Dialogs_main.messagesData} />
        </div>
      </BrowserRouter>
    )
  
}
export default Dialogs_main;
