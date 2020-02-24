import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Main from './Components/Main.js';
import Body from './Components/Body.js';
import Avatar from './Components/Avatar.js';

const App = () => {
  return (
    <div className='App'>
    <Header />

    <Avatar />
      <Main />
    <Body/>
    <Footer/>

      </div>
  );
}

export default App;
