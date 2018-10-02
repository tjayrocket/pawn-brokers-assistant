import React from 'react';
import {render} from 'react-dom';
import SecondaryComponent from './SecondaryComponent.jsx';
import TopBar from './topbar.jsx';

class App extends React.Component {
  render() {
    return (
        <div>
          <TopBar />
          <p> The Rise of the Machines is at hand!</p>
          <SecondaryComponent />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));