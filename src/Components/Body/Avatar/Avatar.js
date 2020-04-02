import React from 'react';
import s from './Avatar.module.css'
const Avatar = (props) =>{
  return(
    <div className={s.ava}>
    <div className={s.name}>
    {props.name}
    </div>
    <img src={props.photo}/>
    </div>
  )
}
export default Avatar;
