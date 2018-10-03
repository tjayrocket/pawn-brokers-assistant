import React from 'react';
import Loan from './Loan.jsx';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <span id="navBar" >
          <button className="button">Loans</button>
          <button className="button">Layaway</button>
          <button className="button">Computer</button>
          <button className="button">Firearm</button>
          <button className="button">F.A.Q.</button>
        </span>
        <Loan />
      </div>
    );
  }

}

export default Main;