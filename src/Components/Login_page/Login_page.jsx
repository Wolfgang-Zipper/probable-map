import React from 'react';
import s from './Login_page.module.css'

import { BrowserRouter, Route } from 'react-router-dom';
const Login_page = (props) => {

  return (

    <div className={s.bod}>
        
      <div className={s.log}>
      <h4 className={s.h4}>Вход в LifeLink</h4>
      <div className={"alert alert-dark "+s.aler} role="alert">

        Чтобы просматривать эту страницу, нужно зайти на сайт.
        </div>
        <form className={s.form}>
          
          <div className="form-group">


            <input placeholder="Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="form-group">

            <input placeholder="Пароль" type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className={s.logc}>
            <button type="submit" className="btn btn-secondary log-button">Войти</button>
            <a className={s.pasbutton} href="" >Забыли пароль ?</a>
          </div>

        </form>
      </div>
    </div>

  )
}
export default Login_page;
