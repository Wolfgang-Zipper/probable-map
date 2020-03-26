let iniState = {
  users: [
    {id: 1, name: 'Pavel', followed: true, status: 'I am boss', location: {city:'Moscow', country:'Russia'} },
    {id: 2, name: 'Sregey', followed: false, status: 'I am boss too', location: {city:'Stavropol', country:'Russia'} }
  ]
}

let iniAction = {

}

const users_redusor = (state = iniState, action = iniAction) => {
  let newState = state;
  switch (action.type){
    default: return state;
  }


}

export default users_redusor;
