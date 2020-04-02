import React from 'react';
import s from './Info.module.css'
const Info = (props) =>{
  return(
    <div className={s.inf}>
    <div className={s.header_info}>

    <li><b>Обо мне</b></li>
    </div>
    <li>{props.aboutMe}</li><br/>
    <div className={s.header_info}>

    <li><b>Контакты</b></li>


    </div>
    <li><b>Facebook:</b> <a href={"https://" + props.contacts.facebook}>{props.contacts.facebook}</a></li>
    <li><b>Сайт:</b> <a href={"https://" + props.contacts.website}>{props.contacts.website}</a></li>
    <li><b>Vk:</b> <a href={"https://" + props.contacts.vk}>{props.contacts.vk}</a></li>
    <li><b>Twitter:</b> <a href={"https://" + props.contacts.twitter}>{props.contacts.twitter}</a></li>
    <li><b>Instagram:</b> <a href={"https://" + props.contacts.instagram}>{props.contacts.instagram}</a></li>
    <li><b>Youtube:</b> <a href={"https://" + props.contacts.youtube}>{props.contacts.youtube}</a></li>
    <li><b>Github:</b> <a href={"https://" + props.contacts.github}>{props.contacts.github}</a></li>
    <li><b>MainLink:</b> <a href={"https://" + props.contacts.mainLink}>{props.contacts.mainLink}</a></li>

    </div>
  )
}
export default Info;
