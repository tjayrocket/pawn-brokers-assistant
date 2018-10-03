import React from 'react';

class TopBar extends React.Component {

  constructor(props){
    super(props);
  };

  render() {
    return (
      <div id="topBar">
        <p id="appName" className="baseText">PAWN BROKER ASSISTANT</p>
      </div>
    );
  }

}

export default TopBar;

//This is the Top bar of the application - fixed in place. Just used for the title.