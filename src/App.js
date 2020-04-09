import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/Header/HeaderComponent.jsx';
import Main from './Components/Main/Main.jsx';
import Dialogs_mainContainer from './Components/Dialogs_main/Dialogs_mainContainer.jsx';
import FriendsContainer from './Components/Friends/FriendsContainer.jsx';
import Grecha from './Components/Grecha/Grecha.jsx';
import UsersContainer from './Components/Users/UsersContainer.jsx';
import BodyContainer from './Components/Body/BodyContainer.jsx';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {

  return (
    <BrowserRouter>
    <div className='back'>
    <HeaderComponent />
    <div className='App content'>
    <Main />
    <div className='route_content'>
    <Route path="/Body/:userId?" render={ () => <BodyContainer/>} />
    <Route path="/Dialogs_main" render={ () => <Dialogs_mainContainer/>} />
    <Route path="/Users" render={ () => <UsersContainer/>} />
    <Route path="/Friends" render={ () => <FriendsContainer/>} />
    <Route path="/Grecha" render={ () => <Grecha/>} />
    </div>
    </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
