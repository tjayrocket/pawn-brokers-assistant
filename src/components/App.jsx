import React, { Component } from 'react';
import {render} from 'react-dom';
import TopBar from './TopBar.jsx';
import SecondaryComponent from './SecondaryComponent.jsx';
import BottomBar from './BottomBar.jsx';

class App extends React.Component {
  render() {
    return (
        <div>
          <TopBar />
          <p> The Rise of the Machines is at hand... bitch!</p>
          <SecondaryComponent />
          <BottomBar />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));