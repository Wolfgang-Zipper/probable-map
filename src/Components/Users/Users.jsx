import React from 'react';
import User from './User/User.js'
const Users = (props) =>{

  let uUsers = props.Users.users.map( use => <User name={use.name} status={use.status} country={use.location.country} city={use.location.city}/>);

  return (
    <div>
      {uUsers}
    </div>
  )
}

export default Users;
