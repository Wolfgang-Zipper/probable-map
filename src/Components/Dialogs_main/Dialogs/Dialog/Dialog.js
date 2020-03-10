import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
const Dialog = (props) =>{
  return(
    <NavLink to={'/Dialogs_main/' + props.id}>
    <div className={s.post}>
      <div className={s.post_header}>
        <img src="https://sun1-84.userapi.com/c855416/v855416401/1ca372/wl_fgfKGcuw.jpg?ava=1"/>
        <div className={s.post_header_info}>
            <div className={s.post_header_info_name}>
            {props.name}
            </div>
          </div>
        </div>
    </div>
    </NavLink>
  )
}
export default Dialog;
