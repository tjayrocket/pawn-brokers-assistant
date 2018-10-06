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

    //Just For verification purposes. Will recycle this for number validation later.
    alert('Your loan amount is: ' + this.state.value);

    //This sets the base amount to a localized variable. Handy for later.
    let amount = this.state.value;

    //Grabs the first circle area.
    let blockOne = document.getElementById('loanOneText');

    // Places the amount into the circle.
    blockOne.innerHTML = '$' + parseInt(amount).toFixed(2);
  }

  render() {
    return (
      <div id="loan">
        <form onSubmit={this.handleSubmit}>
          <label>
            <p className="subText">Please Enter Your Loan Amount:</p>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div id="loanAmount"></div>
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