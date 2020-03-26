import React from 'react';

import User from './User/User.js'
const Users = (props) =>{
  return (
    <User Users={props.Users.users}/>
  )
}

export default Users;
