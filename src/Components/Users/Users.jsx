import React from 'react';
import * as axios from 'axios';
import no_user from '../../Images/no_user.png'
import s from './User.module.css'

const Users = (props) =>{

  let getUsers = () => {
  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

      props.setUsers(response.data.items

    })

}
}
  return <div>
  <button onClick={getUsers}>Get users</button>
  {
    props.users.map( use =>
      <div key={use.id} className={s.body}>
      <div className={s.av}>
          <img src={use.photos.small !=null ? use.photos.small : no_user}/>
      </div>
      <div className={s.fo}>
          {use.followed ?
          <button onClick={() => {props.unfollow(use.id)}} className="btn btn-outline-secondary btn-sm follow" type="button" id="button-addon2">Отписаться</button>
          :
          <button onClick={() => {props.follow(use.id)}} className="btn btn-outline-secondary btn-sm unfollow" type="button" id="button-addon2">Подписаться</button>}
      </div>
      <div className={s.na}>{use.name}</div>
      <div className={s.st}>{use.status}</div>
      <div className={s.lo}><i className="fas fa-map-marker-alt"/> {"use.location.country"}, {"use.location.city"}</div>


      </div>
    )
  }
  </div>
}

export default Users;
