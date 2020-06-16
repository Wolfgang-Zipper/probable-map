import React from 'react';
import s from './Avatar.module.css'
import no_user from '../../../Images/no_user.png'
class Avatar extends React.Component{
  state = {
    editMode: false,
    localStatus: "" 
  }

  setEditMode = () => {
    this.setState({
       editMode: true,
      
      })
  }
  
  NewStatusElement = React.createRef();
  offEditMode = () => {
 
    this.setState({
       editMode: false 
      })
    }
  setStatus = () => {
    this.props.setStatusThunk(this.state.localStatus)
    this.setState({
      editMode: false 
     })
    
  }
  onChangeStatus = () => {
   
    this.setState({
      localStatus:  this.NewStatusElement.current.value
     
     })
  }
  
  render (){
  return(
    <div className={s.ava}>
    <div className={s.name}>
    {this.props.name}
    </div>
    <div className={s.aboutMe}>
      
      {this.state.editMode && this.props.UserId === this.props.sessionUserId ? 
      <div><input className={s.input} ref={this.NewStatusElement} onChange={this.onChangeStatus}  value={this.state.localStatus} autoFocus auto  ></input> <button className={s.button_status} onClick={this.setStatus} ><i class="fas fa-check"></i></button> <button className={s.button_status} onClick={this.offEditMode} ><i class="fas fa-times"></i></button></div>  
      : 
      <li onClick={this.setEditMode}>{this.props.status ? this.props.status : this.props.UserId === this.props.sessionUserId ? "изменить статус" : ""}</li>}

    </div>
    <img src={this.props.photo ? this.props.photo : no_user}/>
    </div>
  )
  }
}
export default Avatar;
