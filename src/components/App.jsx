import React, { Component } from 'react';
import {render} from 'react-dom';
import TopBar from './TopBar.jsx';
import Main from './Main.jsx';
import BottomBar from './BottomBar.jsx';

class App extends React.Component {
  render() {
    return (
        <div>
          <TopBar />
          <Main />
          <BottomBar />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

//This is the basic app building component - basically the Index of the app and REQUIRED for ANYTHING to work!