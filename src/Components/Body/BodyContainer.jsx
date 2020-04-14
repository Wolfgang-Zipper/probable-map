import React from 'react';
import Body from './Body.jsx'
import {changePT, addP, profileThunk, setgetProfileProgress} from '../../Redux/body_redusor.js';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Preloader} from '../Preloader.jsx'
import { withRedirect } from '../HOC/WithRedirect.jsx'
import { compose } from 'redux';
class BodyAPI extends React.Component {
  
  componentDidMount (){
    this.props.setgetProfileProgress(true)
    this.props.profileThunk(this.props.match.params.userId)
    this.props.setgetProfileProgress(false)
  }

  render() {
    
   
    if (this.props.profile){
      if (!this.props.stateProfFetch){
        return <Body {...this.props} />
      }
      else {
        return <Preloader/>
      }
  }
  else {
    return <Preloader/>
  }

}
}

let mapStateToProps = (state) => {
  return {
    newPostText: state.body.newPostText,
    postDate: state.body.postDate,
    friendsData: state.body.friendsData,
    profile: state.body.profile,
    stateProfFetch: state.body.stateProfFetch
  }
}

export default compose 
(connect (mapStateToProps, {changePT, addP, profileThunk, setgetProfileProgress}), 
withRouter, 
withRedirect) (BodyAPI)

