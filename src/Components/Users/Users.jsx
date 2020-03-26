import React from 'react';

import s from './User.module.css'
const Users = (props) =>{

  return <div>

  {
    props.users.map( use =>
      <div key={use.id} className={s.body}>

      <img src="https://sun1-84.userapi.com/c855416/v855416401/1ca372/wl_fgfKGcuw.jpg?ava=1"/>
      <div className={s.header}>
      {use.name}
      {use.status}
      {use.country},{use.city}
      {
        use.followed ?
        <button onClick={() => {props.unfollow(use.id)}} className="btn btn-outline-secondary" type="button" id="button-addon2">Unfollow</button>
        :
        <button onClick={() => {props.follow(use.id)}} className="btn btn-outline-secondary" type="button" id="button-addon2">Follow</button>
      }



      </div>
      </div>
    )
  }
  </div>
}

export default Users;
