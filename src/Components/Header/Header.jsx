import React from 'react';
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {

    return (
        <div className={s.head}>




            <nav className="navbar navbar-expand-lg navbar-light  container">
                <a><NavLink className="navbar-brand mr-auto" to="/Body">

                    <svg width="100" viewBox="0 0 713.4 250.2">
                        <title>logo</title>
                        <g>
                            <path d="M154.3,249.4H-1.2V1H34.5V220H154.3Z" transform="translate(1.2 -1)" />
                            <path d="M187,172.9H163.2V156.7H187Zm-.7,76.5H163.8V182.5h22.5Z"
                                transform="translate(1.2 -1)" />
                            <path
                                d="M249.8,172.4H248a24.8,24.8,0,0,0-4-.9,23.7,23.7,0,0,0-5.2-.6c-4.5,0-7.6.8-9.3,2.3s-2.4,4.5-2.4,8.7v.6h17.8V197H227.8v52.4H205.3V197h-9V182.5h9v-1.9c0-8.2,2.3-14.3,7-18.4s11.6-6.1,21-6.1c3.3,0,6.3.1,9.1.3a62.4,62.4,0,0,1,7.4.9Z"
                                transform="translate(1.2 -1)" />
                            <path
                                d="M291,251.2c-13.7,0-24.1-3.1-31.4-9.1s-10.9-14.6-10.9-25.8,3.4-19.6,10.1-26.2,16.3-9.7,28.5-9.7,19.4,2.7,24.9,8.3,8.4,13.4,8.4,23.7v7.5H271.3a17.1,17.1,0,0,0,2.1,7.7,14.1,14.1,0,0,0,4.7,5,20.6,20.6,0,0,0,6.8,2.7,44.4,44.4,0,0,0,8.4.8,41.3,41.3,0,0,0,7.8-.8,56.3,56.3,0,0,0,6.9-2.1,48.5,48.5,0,0,0,5.1-2.5,33.9,33.9,0,0,0,3.8-2.3h2.4v17.2l-5,1.9a44.7,44.7,0,0,1-6.3,1.7,60.1,60.1,0,0,1-7.6,1.4A62.7,62.7,0,0,1,291,251.2Zm7.4-43.9c-.1-4.4-1.2-7.8-3.3-10.1s-5.3-3.4-9.6-3.4-7.8,1.2-10.2,3.6-3.8,5.7-4.1,9.9Z"
                                transform="translate(1.2 -1)" />
                            <path d="M506.3,249.4H350.8V1h35.7V220H506.3Z" transform="translate(1.2 -1)" />
                            <path d="M539,172.9H515.1V156.7H539Zm-.7,76.5H515.8V182.5h22.5Z"
                                transform="translate(1.2 -1)" />
                            <path
                                d="M623.2,249.4H600.6V216.2a73.2,73.2,0,0,0-.4-8.1,14.7,14.7,0,0,0-1.3-5.9,7.5,7.5,0,0,0-3.3-3.3,15.7,15.7,0,0,0-5.9-1,18.9,18.9,0,0,0-5.6,1,24,24,0,0,0-6,3v47.5H555.6V182.5h22.5v7.3a53.9,53.9,0,0,1,10.8-6.7,25.7,25.7,0,0,1,11.6-2.5c7.3,0,13,2.2,16.9,6.5s5.8,10.5,5.8,18.7Z"
                                transform="translate(1.2 -1)" />
                            <path
                                d="M712.2,249.4H685.5l-19.6-29.2-3.5,4.4v24.8H639.9V156.7h22.5v51.9l21.4-26.1h26.6l-25.3,28.8Z"
                                transform="translate(1.2 -1)" />
                        </g>
                    </svg>

                </NavLink></a>



                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>
                    {props.userData.resultCode == 1
                        ?
                        <form className="form-inline my-2 my-lg-0">
                            <div className="form-group mb-2">
                                <label for="staticEmail2" className="sr-only">Email</label>
                                <input type="text" readonly className="form-control form-control-sm" id="staticEmail2" placeholder="Логин" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" className="sr-only">Password</label>
                                <input type="password" classNameName="form-control form-control-sm" id="inputPassword2" placeholder="Пароль" />
                            </div>
                            <button className="btn btn-secondary mb-2 btn-sm">Войти</button>
                        </form>
                        :
                        <div >
                            <p className={s.login}>{props.userData.data.login}</p>
                            <img className={s.login_img} src={props.userData.img} />
                        </div>
                    }
                </div>
            </nav>


        </div>
    )
}
export default Header;
