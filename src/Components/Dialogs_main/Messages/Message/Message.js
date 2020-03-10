import React from 'react';
import s from './Message.module.css';
import logo from '../../../../Img/1.jpg'
const Message = (props) =>{
  return(
    <div className={s.post}>
      <div className={s.post_header}>
        <img src={logo}/>
        <div className={s.post_header_info}>
        {props.name} <br/>
          <h9>
          {props.date_massege}
          </h9>
        </div>
        </div>
      <div className={s.post_body}>
      {props.text_massage}
      </div>
    </div>

  )
}
export default Message;
