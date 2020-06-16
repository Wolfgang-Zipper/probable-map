import React from 'react';
import s from './Body.module.css'
import Posts from './Posts/Posts.js'
import Avatar from './Avatar/Avatar.js'
import Info from './Info/Info.jsx'
import Friends from '../Friends/Friends.jsx'

class Body extends React.Component {
  
   render () {
  return(
    <div className={s.bod}>
    <div className={s.frend}>
    <div className={s.header_info}>
      Друзья
    </div>
    <Friends friendsData={this.props.friendsData}/>
    </div>
    <Avatar setStatusThunk={this.props.setStatusThunk} status={this.props.status} UserId={this.props.profile.userId} sessionUserId={this.props.sessionUserId} statusThunk={this.props.statusThunk} aboutMe={this.props.profile.aboutMe} name={this.props.profile.fullName} photo={this.props.profile.photos.large}/>
    <Info aboutMe={this.props.profile.aboutMe} contacts={this.props.profile.contacts}/>
    <Posts  onChangePost={this.props.changePT} addPost={this.props.addP} newPostText={this.props.newPostText}  postDate={this.props.postDate}/>
    </div>
  )
   }
};
export default Body;
