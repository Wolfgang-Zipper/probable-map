import React from 'react';
import s from './Info.module.css'
class Info extends React.Component {

 
  render() {
    return (
      <div className={s.inf}>
        <div className={s.header_info}>
          <li>Обо мне</li>
          
        </div>
        <div className={s.info}>
        {this.props.aboutMe}
          
        </div>
        
        <div className={s.header_info}>

          <li>Контакты</li>


        </div>
        <li>Facebook: <a target="_blank" href={this.props.contacts.facebook}>{this.props.contacts.facebook}</a></li>
        <li>Сайт: <a target="_blank" href={this.props.contacts.website}>{this.props.contacts.website}</a></li>
        <li>Vk: <a target="_blank" href={this.props.contacts.vk}>{this.props.contacts.vk}</a></li>
        <li>Twitter: <a target="_blank" href={this.props.contacts.twitter}>{this.props.contacts.twitter}</a></li>
        <li>Instagram: <a target="_blank" href={this.props.contacts.instagram}>{this.props.contacts.instagram}</a></li>
        <li>Youtube: <a target="_blank" href={this.props.contacts.youtube}>{this.props.contacts.youtube}</a></li>
        <li>Github: <a target="_blank" href={this.props.contacts.github}>{this.props.contacts.github}</a></li>
        <li>MainLink: <a target="_blank" href={this.props.contacts.mainLink}>{this.props.contacts.mainLink}</a></li>

      </div>
    )
  }
}
export default Info;
