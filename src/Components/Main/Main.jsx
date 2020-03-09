import React from 'react';
import s from './Main.module.css';
import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <div className={s.mai}>
            <ul>
                <li className={s.link}><NavLink className={s.link_inner} to="/Body"><i class="fas fa-home"></i> Главная</NavLink>
                </li>
                <li className={s.link}><NavLink className={s.link_inner} to="/Dialogs_main">
                    <i className="fas fa-envelope"/> Сообщения</NavLink></li>
                <li className={s.link}><NavLink className={s.link_inner} to="/Friends">
                    <i className="fas fa-user-friends"/> Друзья</NavLink></li>
                <li className={s.link}><NavLink className={s.link_inner} to="/News">
                    <i class="far fa-newspaper"/> Новости</NavLink></li>
                <li className={s.link}><NavLink className={s.link_inner} to="/Photo">
                    <i class="fas fa-images"/> Фотографии</NavLink></li>
                <li className={s.link}><NavLink className={s.link_inner} to="/Settings">
                    <i className="fas fa-cog"/> Настройки</NavLink></li>
            </ul>

        </div>
    )
}
export default Main;
