import React from 'react';
import Loan from './Loan.jsx';
import Layaway from './Layaway.jsx';
import Computer from './Computer.jsx';
import Firearm from './Firearm.jsx';
import Faq from './FAQ.jsx';
import BasicExample from './Scratch.jsx';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  loanClicked(){
    alert('This functionality is NOT ready yet - please be patient.');
  };

  layawayClicked(){
    alert('This functionality is NOT ready yet - please be patient.');
  };

  computerClicked(){
    alert('This functionality is NOT ready yet - please be patient.');
  };

  firearmClicked(){
    alert('This functionality is NOT ready yet - please be patient.');
  };

  faqClicked(){
    alert('This functionality is NOT ready yet - please be patient.');
  };

  render() {
    return (
      <div id="main">
        <span id="navBar" >
          <button className="button" onClick={ this.loanClicked }>Loans</button>
          <button className="button" onClick={ this.layawayClicked }>Layaway</button>
          <button className="button" onClick={ this.computerClicked }>Computer</button>
          <button className="button" onClick={ this.firearmClicked }>Firearm</button>
          <button className="button" onClick={ this.faqClicked }>F.A.Q.</button>
        </span>
        {/* <Faq /> */}
        <Loan />
        {/* <BasicExample /> */}
      </div>
    );
  }

}

export default Main;