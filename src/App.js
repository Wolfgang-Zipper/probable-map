import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import Dialogs_mainContainer from './Components/Dialogs_main/Dialogs_mainContainer.jsx';
import Friends from './Components/Friends/Friends.jsx';
import Grecha from './Components/Grecha/Grecha.jsx';

import Body from './Components/Body/Body.jsx';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {
  let state = props.state;
  return (
    <BrowserRouter>
    <div className='back'>
    <Header />
    <div className='App content'>
    <Main />
    <div className='route_content'>
    <Route path="/Body" render={ () =>
      <Body
        dispatch={props.dispatch}
        newPostText={state.Body.newPostText}
        friendsData={state.Body.friendsData}
        postDate={state.Body.postDate}/>} />
    <Route path="/Dialogs_main" render={ () =>
      <Dialogs_mainContainer
        state={state}
        dispatch={props.dispatch}
        store={props.store} />} />
    <Route path="/Friends" render={ () =>
      <Friends
        friendsData={state.Body.friendsData}/>} />
        <Route path="/Grecha" render={ () => <Grecha/>} />
      </div>
      </div>
      </div>
      </BrowserRouter>
    );
  };

  export default App;
