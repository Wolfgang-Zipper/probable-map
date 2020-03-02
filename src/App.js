import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Body from './Components/Footer/Body.js';
import Info from './Components/Info/Info.js';
import Avatar from './Components/Avatar/Avatar.js';

const App = () => {
  return (
    <div className='back'>

        <Header />
        <div className='App content'>
        <Avatar />
        <Main />
        <Info/>
        <Body/>
    </div>
    </div>
  );
}

export default App;
