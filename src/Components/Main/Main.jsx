import React from 'react';
import s from './Main.module.css';
import {NavLink} from "react-router-dom";

const Main = () => {
  return (
    <div className={s.mai}>
    <ul>
    <NavLink className={s.link_inner} to="/Body"><li className={s.link}><i class="fas ico_n fa-home"></i> Главная
    </li></NavLink>
    <NavLink className={s.link_inner} to="/Dialogs_main"><li className={s.link}>
    <i className="fas ico_n fa-envelope"/> Сообщения</li></NavLink>
    <NavLink className={s.link_inner} to="/Friends"><li className={s.link}>
    <i className="fas ico_n fa-user-friends"/> Друзья</li></NavLink>
    <NavLink className={s.link_inner} to="/News"><li className={s.link}>
    <i class="far ico_n fa-newspaper"/> Новости</li></NavLink>
    <NavLink className={s.link_inner} to="/Photo"><li className={s.link}>
    <i class="fas ico_n fa-images"/> Фотографии</li></NavLink>
    <NavLink className={s.link_inner} to="/Settings"><li className={s.link}>
    <i className="fas ico_n fa-cog"/> Настройки</li></NavLink>
    <NavLink className={s.link_inner} to="/Grecha"><li className={s.link}>
    <i className="fas ico_n fa-biohazard"/> Курс Гречи</li></NavLink>
    </ul>

    </div>
  )
}
export default Main;
