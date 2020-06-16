import {connect} from 'react-redux'
import React from 'react';
import { Redirect } from 'react-router-dom';
export const withRedirect = (Component) => {
    let mapStateToPropsForRedirect = (state) => {
        return {
          resultCode: state.Login.resultCode
        }
      }
      
    class AuthRedirectComponent extends React.Component {
      
        render() {

        if (this.props.resultCode === 1) return <Redirect  to="/Login_page"/> 
        
        return < Component {...this.props}/>
         
        }
      }
      let AuthRedirectComponentWithProps = connect (mapStateToPropsForRedirect) (AuthRedirectComponent)
      return AuthRedirectComponentWithProps;

}