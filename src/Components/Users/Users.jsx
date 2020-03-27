import React from 'react';

import s from './User.module.css'
const Users = (props) =>{

  return <div>

  {
    props.users.map( use =>
      <div key={use.id} className={s.body}>
      <div className={s.av}>
          <img src={use.img}/>
      </div>
      <div className={s.fo}>
          {use.followed ?
          <button onClick={() => {props.unfollow(use.id)}} className="btn btn-outline-secondary btn-sm follow" type="button" id="button-addon2">Отписаться</button>
          :
          <button onClick={() => {props.follow(use.id)}} className="btn btn-outline-secondary btn-sm unfollow" type="button" id="button-addon2">Подписаться</button>}
      </div>
      <div className={s.na}>{use.name}</div>
      <div className={s.st}>{use.status}</div>
      <div className={s.lo}><i className="fas fa-map-marker-alt"/> {use.location.country}, {use.location.city}</div>


      </div>
    )
  }
  </div>
}

export default Users;
