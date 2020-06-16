
import Login_page from './Login_page.jsx'
import {logInThunk} from '../../Redux/login_redusor.js';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {

  return{
    Login_page: state.Login_page,
    resultCode: state.Login.resultCode
  }
}



const Login_pageContainer = connect (mapStateToProps, {logInThunk}) (Login_page);


export default Login_pageContainer; //Container для тупой/презентационной функциональной компоненты в который перенесена вся логика и переданные через props dispatch и store
