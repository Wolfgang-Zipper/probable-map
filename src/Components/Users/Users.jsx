import React from 'react';
import * as axios from 'axios';
import no_user from '../../Images/no_user.png'
import s from './User.module.css'
class Users extends React.Component {

  componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.userQuantity}`)
    .then(response => {this.props.setUsers(response.data)})
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.userQuantity}`)
      .then(response => {this.props.getUsersCount(response.data.totalCount)})
  }

  render() {
    let pageNumbers = Math.ceil( this.props.usersCount / this.props.userQuantity);
    let pages = [];
    for (let i=1; i<=20; i++){
      pages.push(i);
    }
let currPage = (currNumber) => {
  this.props.setCurrentPage(currNumber)
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currNumber}&count=${this.props.userQuantity}`)
  .then(response => {this.props.setUsers(response.data)})
}
    return <div>
      <div className="btn-group btn-group-toggle number-page" data-toggle="buttons">

        {pages.map( p => <button className="btn btn-secondary" onClick={() => currPage(p) }><input type="radio" name="options" id="option1" autocomplete="off"/>{p}</button>)}


      </div>
      {
        this.props.users.map( use =>
          <div key={use.id} className={s.body}>
            <div className={s.av}>
              <img src={use.photos.small !=null ? use.photos.small : no_user}/>
            </div>
            <div className={s.fo}>
              {use.followed ?
                <button onClick={() => {this.props.unfollow(use.id)}} className="btn btn-outline-secondary btn-sm follow" type="button" id="button-addon2">Отписаться</button>
                :
                <button onClick={() => {this.props.follow(use.id)}} className="btn btn-outline-secondary btn-sm unfollow" type="button" id="button-addon2">Подписаться</button>}
                </div>
                <div className={s.na}>{use.name}</div>
                <div className={s.st}>{use.status}</div>
                <div className={s.lo}><i className="fas fa-map-marker-alt"/> {"use.location.country"}, {"use.location.city"}</div>


              </div>
            )
          }

          <div className="btn-group btn-group-toggle number-page" data-toggle="buttons">

            {pages.map( p => <button className="btn btn-secondary" onClick={() => currPage(p) }><input type="radio" name="options" id="option1" autocomplete="off"/>{p}</button>)}


          </div>

        </div>
      }


    }

    export default Users;
