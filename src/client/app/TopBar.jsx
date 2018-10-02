import React from 'react';

class TopBar extends React.Component {

  constructor(props){
    super(props);
  };

  render() {
    return (
      <div id="top-bar">
        <img id="name" src="../assets/tjaytitlebar.png" />
      </div>
    );
  }

}

export default TopBar;