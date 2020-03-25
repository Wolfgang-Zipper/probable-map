import React from 'react';
import s from './User.module.css'
const Friend = (props) =>{
  return(
    <div className={s.body}>

        <img src="https://sun1-84.userapi.com/c855416/v855416401/1ca372/wl_fgfKGcuw.jpg?ava=1"/>
        <div className={s.header}>
        {props.name}
        </div>
    </div>
  )
};
export default Friend;
