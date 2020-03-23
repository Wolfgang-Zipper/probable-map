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
    <div className={s.header_info}>
      Друзья
    </div>
    <Friends friendsData={props.friendsData}/>
    </div>
    <Avatar name="Сергей Зеленский"/>
    <Info/>
    <Posts  onChangePost={props.onChangePost} addPost={props.addPost} newPostText={props.newPostText}  postDate={props.postDate}/>
    </div>
  )
};
export default Body;
