import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import Dialogs_main from './Components/Dialogs_main/Dialogs_main.jsx';
import Friends from './Components/Friends/Friends.jsx';

import Body from './Components/Body/Body.jsx';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='back'>
        <Header />
        <div className='App content'>
          <Main />
            <div className='route_content'>
            <Route path="/Body" render={ () => <Body changePostText={props.changePostText} newPostText={props.appData.Body.newPostText} addnewPost={props.addnewPost} friendsData={props.appData.Body.friendsData} postDate={props.appData.Body.postDate}/>} />
            <Route path="/Dialogs_main" render={ () => <Dialogs_main addnewMess={props.addnewMess} newMessText={props.appData.Dialogs_main.newMessText} changeMessText={props.changeMessText} messagesData={props.appData.Dialogs_main.messagesData} dialogsData={props.appData.Dialogs_main.dialogsData} />} />
            <Route path="/Friends" render={ () => <Friends friendsData={props.appData.Body.friendsData}/>} />
            </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
