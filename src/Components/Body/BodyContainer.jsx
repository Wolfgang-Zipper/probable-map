import React from 'react';
import s from './Body.module.css'
import Posts from './Posts/Posts.js'
import Avatar from './Avatar/Avatar.js'
import Info from './Info/Info.js'
import Friends from '../Friends/Friends.jsx'
import Body from './Body.jsx'
import * as axios from 'axios';
import {changePostTextActioncreator, addnewPostActioncreator, getPageUserAC} from '../../Redux/body_redusor.js';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Preloader} from '../Preloader.jsx'

class BodyAPI extends React.Component {
  componentDidMount (){
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.getPageUser(response.data);
      });
  }

  render() {
    if (this.props.profile){
    return <Body {...this.props} />
  }
  else {
    return <Preloader/>
  }
}
}

let mapStateToProps = (state) => {
  return {
    newPostText: state.body.newPostText,
    postDate: state.body.postDate,
    friendsData: state.body.friendsData,
    profile: state.body.profile

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () =>{

        dispatch(addnewPostActioncreator()); // в этот момент текст из поля по ссылке NewPostElement попадает в функцию addPost которая находится в условном BLL state.js
    },
    onChangePost: (text) =>{

      dispatch(changePostTextActioncreator(text));// в этот момент текст из поля по ссылке NewPostElement попадает в функцию changeText находящуюся в state.js

    },
    getPageUser: (profile) => {
      dispatch(getPageUserAC(profile));
    }
  }
  debugger
}
let GetRouterLoc = withRouter (BodyAPI);
const BodyContainer = connect (mapStateToProps, mapDispatchToProps)(GetRouterLoc);
export default BodyContainer;
