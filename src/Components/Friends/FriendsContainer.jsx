
import Friends from './Friends.jsx'
import {connect} from 'react-redux'
import { withRedirect } from '../HOC/WithRedirect.jsx'
let mapStateToProps = (state) => {
  return{
    friendsData: state.body.friendsData
  }
}

const FriendsContainer = connect (mapStateToProps)(withRedirect(Friends));
export default FriendsContainer;
