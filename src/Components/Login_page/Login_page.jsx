import React from 'react';
import s from './Login_page.module.css'
import Login_form from '../Forms/Login_form'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom';
const Login_page_ReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(Login_form)

class Login_page extends React.Component {
onSubmit = (formData) => {
  
  this.props.logInThunk(formData.email, formData.password , formData.check)
 
}
render (){
    if (this.props.resultCode === 0) return <Redirect  to="/Body"/>
  return (

    <div className={s.bod}>
        
      <div className={s.log}>
      <h4 className={s.h4}>Вход в LifeLink</h4>
      <div className={"alert alert-dark "+s.aler} role="alert">

        Чтобы просматривать эту страницу, нужно зайти на сайт.
        </div>
        <Login_page_ReduxForm onSubmit={this.onSubmit}/>
      </div>
    </div>

  )
}
}
export default Login_page;
