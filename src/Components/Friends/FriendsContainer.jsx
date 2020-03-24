import React from 'react';
import s from './Friends.module.css'
import Friends from './Friends.jsx'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return{
    friendsData: state.body.friendsData
  }
}

const FriendsContainer = connect (mapStateToProps)(Friends);
export default FriendsContainer;
