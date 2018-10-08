import React from 'react'

class Loan extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // This fires off when I hit submit. The goal is to add the necessary logic top populate the screen with accurate numbers. This iwll take a bit but most of the logic has been recycled from the other repo.

  handleSubmit(event) {
    event.preventDefault();

    //This sets the base amount to a localized variable. Handy for later. Assigned by the field.

    let amount = this.state.value;

    //This function validates the input of numbers into the form.

    function loanValidate(){
      if(amount === '' || isNaN(amount)){
        alert('Please enter a loan amount - numbers only, please.');
        return false;
      } else {
        alert('Your loan amount is: ' + amount);
        return true;
      }
    };

      loanValidate();

    let storage = 5;
    let firearm = 5;
    let lateFee = 10;
    let missingTicket = 5;

    let processingInterest = function(amount){

    }

    // let interest;
    
    // function interestRate(amount){

    // }


    let first;
    let second;
    let third;
    let late;
    let final;

    let forfeit;


    // console.log('Loan amount = $' + parseInt(amount).toFixed(2)); //Loan Amount
    // console.log('10% = $' + parseInt(amount/10).toFixed(2)); //Interest
    

    //Grabs the first circle area.
    // let blockOne = document.getElementById('loanOneRate');

    // Places the amount into the circle.
    // blockOne.innerHTML = '$' + parseInt(amount).toFixed(2);
  }

  render() {
    return (
      <div id="loan">
        <form id="loanForm" onSubmit={this.handleSubmit}>
          <label>
            <p className="subText">Please Enter Your Loan Amount:</p>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="checkbox" />
          <input type="submit" value="Submit" />
        </form>
        <div id="loanAmount">
          <p id="loanOneRate" className="loanText">$0.00</p>
        </div>
        <div id="loanRatesBlock">
          <div id="interestRate" className="rightBlock"></div>
          <div id="processingFee" className="rightBlock"></div>
          <div id="storageFee" className="rightBlock"></div>
        </div>
        <span id="loanArea">
          <div id="loanOne" className="loanDiv">
            <p id="loanOneText" className="loanText">$0.00</p>
          </div>
          <div id="loanTwo" className="loanDiv">
            <p id="loanTwoText" className="loanText">$0.00</p>
          </div>
          <div id="loanThree" className="loanDiv">
            <p id="loanThreeText" className="loanText">$0.00</p>
          </div>
          <div id="loanFour" className="loanDiv">
            <p id="loanThreeText" className="loanText">$0.00</p>
          </div>
          <div id="loanFive" className="loanDiv">
            <p id="loanThreeText" className="loanText">$0.00</p>
          </div>
        </span>
      </div>
    );
  }
}

export default Loan;