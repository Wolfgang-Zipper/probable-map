import React from 'react';
import s from './Friends.module.css'
import Friend from './Friend/Friend.js'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return{
    friendsData: state.body.friendsData
  }

}
let mapDispatchToProps = (dispatch) => {

}
const FriendsContainer = connect (mapStateToProps, mapDispatchToProps)(Friend);
export default FriendsContainer;
