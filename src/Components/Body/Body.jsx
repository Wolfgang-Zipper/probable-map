import React from 'react';
import s from './Body.module.css'
import Posts from './Posts/Posts.js'
import Avatar from './Avatar/Avatar.js'
import Info from './Info/Info.js'
import Friends from '../Friends/Friends.jsx'
const Body = (props) =>{
  return(
    <div className={s.bod}>
    <div className={s.frend}>
    <Friends friendsData={props.friendsData}/>
    </div>
    <Avatar name="Сергей Зеленский"/>
    <Info/>
    <Posts changePostText={props.changePostText} newPostText={props.newPostText} addnewPost={props.addnewPost} postDate={props.postDate}/>
    </div>
  )
};
export default Body;
