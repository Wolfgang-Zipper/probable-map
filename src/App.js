import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Main from './Components/Main/Main.js';
import Body from './Components/Body/Body.js';
import Avatar from './Components/Avatar/Avatar.js';

const App = () => {
  return (
    <div className='back'>

        <Header />
        <div className='App content'>
        <Avatar />
        <Main />
        <Body/>
        <Footer/>
    </div>
    </div>
  );
}

export default App;
