import React from 'react';

class BottomBar extends React.Component {

  constructor(props){
    super(props);
  };

  render() {
    return (
      <div id="bottomBar">
        <p className="baseText">PAWN BROKER ASSISTANT (ver. 1.0.0) created 2018 by <a className="links" href="http://tjayrocket.com/" target="_blank">T.Jay Rocket</a> - Rogue Independent Media. <a className="links" href="https://github.com/tjayrocket/pawn-brokers-assistant" target="_blank">Built</a> with <a className="links" href="https://reactjs.org/" target="_blank">REACT</a> under MIT License.</p>
        <p className="baseText">All rates, interest and fees for pawnbrokers,  approved by Wash. Rev. Code <a className="links" href="http://apps.leg.wa.gov/rcw/default.aspx?cite=19.60&full=true#19.60.060" target="_blank">19.60.060</a>, amended 2015, and available publicly at the link provided.</p>
      </div>
    );
  }

}

export default BottomBar;

//This is the Bottom bar of the application - fixed in place. Just used for the title.Used for credits and disclaimers.