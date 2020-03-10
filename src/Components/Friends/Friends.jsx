import React from 'react';
import s from './Friends.module.css'
import Friend from './Friend/Friend.js'

const Friends = (props) =>{
  let fre = props.friendsData.map( fr => <Friend id={fr.id} name={fr.name} />);
  return(
    <div className={s.bod}>
    <div className={s.header_info}>
    Друзья
    </div>
      {fre}
    </div>
  )
};
export default Friends;
