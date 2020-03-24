import React from 'react';
import s from './Body.module.css'
import Posts from './Posts/Posts.js'
import Avatar from './Avatar/Avatar.js'
import Info from './Info/Info.js'
import Friends from '../Friends/Friends.jsx'
import Body from './Body.jsx'
import {changePostTextActioncreator, addnewPostActioncreator} from '../../Redux/body_redusor.js';
import {connect} from 'react-redux'
let mapStateToProps = (state) => {
  return {
    newPostText: state.body.newPostText,
    postDate: state.body.postDate,
    friendsData: state.body.friendsData

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () =>{

        dispatch(addnewPostActioncreator()); // в этот момент текст из поля по ссылке NewPostElement попадает в функцию addPost которая находится в условном BLL state.js
    },
    onChangePost: (text) =>{

      dispatch(changePostTextActioncreator(text));// в этот момент текст из поля по ссылке NewPostElement попадает в функцию changeText находящуюся в state.js

    }
  }
  debugger
}
const BodyContainer = connect (mapStateToProps, mapDispatchToProps)(Body);
export default BodyContainer;
