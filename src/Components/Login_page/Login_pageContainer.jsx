import React from 'react';
import Login_page from './Login_page.jsx'
import {actionaddPostcreator, actionchangeMessTextcreator} from '../../Redux/login_page_redusor.js';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return{
    Login_page: state.Login_page
  }
}
let mapDispatchToProps = (dispatch) => {
  return{
    addPost: () => {
        dispatch(actionaddPostcreator());
    },
    onChangeMess: (text) => {
      dispatch(actionchangeMessTextcreator(text));
    }
  }
}

const Login_pageContainer = connect (mapStateToProps, mapDispatchToProps) (Login_page);


export default Login_pageContainer; //Container для тупой/презентационной функциональной компоненты в который перенесена вся логика и переданные через props dispatch и store
