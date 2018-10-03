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

  handleSubmit(event) {
    alert('Your loan amount is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
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