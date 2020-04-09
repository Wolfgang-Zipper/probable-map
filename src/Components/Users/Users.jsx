import React from 'react';
import no_user from '../../Images/no_user.png'
import s from './User.module.css'
import { NavLink } from "react-router-dom";
import { API_REQ } from '../API/API_REQ';

const Users = (props) => {
    let pageNumbers = Math.ceil(props.usersCount / props.userQuantity);
    let pages = [];
    for (let i = 1; i <= pageNumbers; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className="btn-group-toggle number-page d-contents" data-toggle="buttons">

                {pages.map(p => <button className="btn btn-secondary" onClick={() => props.currPage(p)}><input type="radio" name="options" id="option1" autocomplete="off" />{p}</button>)}


            </div>
            {
                props.users.map(use =>
                    <div key={use.id} className={s.body}>
                        <NavLink className={s.av} to={"/Body/" + use.id}>
                            <img src={use.photos.small != null ? use.photos.small : no_user} />
                        </NavLink>
                        <NavLink className={s.na} to={"/Body/" + use.id}>
                            {use.name}
                        </NavLink>
                        <div className={s.fo}>
                            {use.followed
                                ?
                                <button disabled={props.followProgress.some(id => id === use.id)} onClick={() => {
                                    props.unfollowThunk(use.id)
                                }}
                                    className="btn btn-outline-secondary btn-sm follow" type="button" id="button-addon2">Отписаться</button>
                                :
                                <button disabled={props.followProgress.some(id => id === use.id)} onClick={() => {
                                    props.followThunk(use.id)
                                }} className="btn btn-outline-secondary btn-sm unfollow" type="button" id="button-addon2">Подписаться</button>
                            }
                        </div>

                        <div className={s.st}>{use.status}</div>
                        <div className={s.lo}><i className="fas fa-map-marker-alt" /> {"use.location.country"}, {"use.location.city"}</div>


                    </div>
                )
            }

            <div className="btn-group-toggle number-page d-contents" data-toggle="buttons">

                {pages.map(p => <button className="btn btn-secondary" onClick={() => props.currPage(p)}><input type="radio" name="options" id="option1" autocomplete="off" />{p}</button>)}


            </div>

        </div>
    )
}

export default Users;
