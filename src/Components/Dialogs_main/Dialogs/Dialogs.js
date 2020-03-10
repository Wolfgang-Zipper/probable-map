import React from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog.js'
const Dialogs = (props) =>{

  let dialogs = props.dialogsData.map( dial => <Dialog id={dial.id} name = {dial.name}/> );
  return(
    <div className={s.post}>
    {dialogs}
    </div>
  )
};
export default Dialogs;
