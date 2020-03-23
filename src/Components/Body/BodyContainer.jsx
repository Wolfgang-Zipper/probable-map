import React from 'react';
import s from './Body.module.css'
import Posts from './Posts/Posts.js'
import Avatar from './Avatar/Avatar.js'
import Info from './Info/Info.js'
import Friends from '../Friends/Friends.jsx'
import Body from './Body.jsx'
import {changePostTextActioncreator, addnewPostActioncreator} from '../../Redux/body_redusor.js';

const BodyContainer = (props) =>{
  let addPost = () => {

  props.dispatch(addnewPostActioncreator()); // в этот момент текст из поля по ссылке NewPostElement попадает в функцию addPost которая находится в условном BLL state.js

  };
  let onChangePost = (text) => {

    props.dispatch(changePostTextActioncreator(text));// в этот момент текст из поля по ссылке NewPostElement попадает в функцию changeText находящуюся в state.js

  };
  return(

    <Body onChangePost={onChangePost} addPost={addPost} newPostText={props.newPostText} postDate={props.postDate} friendsData={props.friendsData} />

  )
};
export default BodyContainer;
