import React from 'react';
import s from './Body.module.css'
import Post from './Post/Post.js'
const Body = ( ) =>{
  return(
    <div className={s.bod}>
    <Post like='23'/>
    <Post like='23'/>
    <Post like='23'/>
    <Post like='23'/>
    <Post like='23'/>
    <Post like='23'/>
    <Post like='23'/>
    <Post like='23'/>

    </div>
  )
}
export default Body;
