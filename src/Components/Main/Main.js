import React from 'react';
import s from './Main.module.css';
import {NavLink} from "react-router-dom";
const Main = ( ) =>{
  return(
    <div className={s.mai}>
    <ul>
    <li><NavLink to="/Dialogs">Messages</NavLink></li>
    <li><NavLink to="/Body">Body</NavLink></li>
    <li><a href="#">as</a></li>
    </ul>

    </div>
  )
}
export default Main;
