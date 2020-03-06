import React from 'react';
import s from './Body.module.css'
import Posts from '../Posts/Posts.js'
import Avatar from '../Avatar/Avatar.js'
import Info from '../Info/Info.js'
const Body = ( ) =>{
  return(
    <div className={s.bod}>
    <Avatar />
    <Info/>
    <Posts/>
    </div>
  )
}
export default Body;
