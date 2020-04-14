import Dialogs_main from './Dialogs_main.jsx'
import {actionaddPostcreator, actionchangeMessTextcreator} from '../../Redux/dialogs_main_redusor.js';
import {connect} from 'react-redux'
import { withRedirect } from '../HOC/WithRedirect.jsx'
import { compose } from 'redux';

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
export default compose (
  connect (mapStateToProps, mapDispatchToProps), 
  withRedirect) (Dialogs_main)




// Dialogs_mainContainer для тупой/презентационной функциональной компоненты в который перенесена вся логика и переданные через props dispatch и store
