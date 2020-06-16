import React from 'react';
import s from './Login_form.module.css'
import { Field, reduxForm } from 'redux-form'


const Login_form = (props) => {

    return (<form className={s.form} onSubmit={props.handleSubmit}>

        <div className="form-group">


            <Field placeholder="Email" type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" component="input" />

        </div>
        <div className="form-group">

            <Field placeholder="Пароль" type="password" name="password"  className="form-control" id="exampleInputPassword1" component="input" />

        </div>
        <div className="form-group form-check">
            <Field type="checkbox" name="check" className="form-check-input" id="exampleCheck1" component="input" />
            <label className="form-check-label" for="exampleCheck1">Запомнить меня</label>
        </div>
        <div className={s.logc}>
            <button type="submit" className="btn btn-secondary log-button">Войти</button>
            <a className={s.pasbutton}target="_blank" href="https://social-network.samuraijs.com/signUp">Регистрация</a>
        </div>

    </form>
    )
}

export default Login_form;