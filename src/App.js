import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Dialogs from './Components/Dialogs/Dialogs.js';
import Info from './Components/Info/Info.js';
import Avatar from './Components/Avatar/Avatar.js';
import Body from './Components/Body/Body.js';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='back'>
        <Header />
        <div className='App content'>
          <Main />
            <div className='route_content'>
            <Route path="/Body" component={Body} />
            <Route path="/Dialogs" component={Dialogs} />
            </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
