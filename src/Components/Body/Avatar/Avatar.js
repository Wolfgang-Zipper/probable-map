import React from 'react';
import s from './Avatar.module.css'
import no_user from '../../../Images/no_user.png'
const Avatar = (props) =>{
  return(
    <div className={s.ava}>
    <div className={s.name}>
    {props.name}
    </div>
    <img src={props.photo ? props.photo : no_user}/>
    </div>
  )
}
export default Avatar;
