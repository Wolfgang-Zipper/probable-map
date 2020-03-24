import React from 'react';
import Dialogs_main from './Dialogs_main.jsx'
import {actionaddPostcreator, actionchangeMessTextcreator} from '../../Redux/dialogs_main_redusor.js';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return{
    Dialogs_main: state.Dialogs_main
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

const Dialogs_mainContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs_main);


export default Dialogs_mainContainer; //Container для тупой/презентационной функциональной компоненты в который перенесена вся логика и переданные через props dispatch и store
