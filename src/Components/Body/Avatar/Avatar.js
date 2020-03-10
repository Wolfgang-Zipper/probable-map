import React from 'react';
import s from './Avatar.module.css'
const Avatar = (props) =>{
  return(
    <div className={s.ava}>
    <div className={s.name}>
    {props.name}
    </div>
    <img src="https://sun9-64.userapi.com/c855120/v855120069/981f9/HyBi4GnBoDE.jpg"/>
    </div>
  )
}
export default Avatar;
