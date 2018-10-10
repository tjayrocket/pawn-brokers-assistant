import React from 'react'
import { userInfo } from 'os';

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

  // This fires off when I hit submit. The goal is to add the necessary logic top populate the screen with accurate numbers. This will take a bit but most of the logic has been recycled from the other repo.

  handleSubmit(event) {

    event.preventDefault();

    //This sets the base amount to a localized variable. Handy for later. Assigned by the input field.

    let amount = this.state.value;

    // isNaN(amount)

    // if(amount[0] === '$'){
    //   let amount = amount.substring(1);
    // }

    //This function validates the input of numbers into the form.

    function loanValidate(){

      if(amount === ''){
        alert('Please enter a loan amount.');
        return false;
      } else if(isNaN(amount)){
        alert('Please enter numbers only.')
      } else {
        alert('Your loan amount is: $' + amount);
        console.log('Your loan amount = $' + parseInt(amount).toFixed(2));
        return true;
      }

    };

    loanValidate();

    console.log(amount);

    // amount = parseInt(amount).toFixed(2);

    // Set these to booleans?

    // let storage = (5).toFixed(2);
    // let firearm = (5).toFixed(2);
    // let lateFee = (10).toFixed(2);
    // let missingTicket = (5).toFixed(2);

    // Defining these variables for processingInterest function.

    // let interest;
    // let processing;

    // let processingInterest = function(amount){

    //   console.log('Amount being called = ' + amount);

    //   if(amount <= 4.99){

    //     console.log( 'Tier 1 - Interest = $1.00, Processing Fee = $1.50');
    //     interest = 1;
    //     processing = 1.5;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 9.99){

    //     console.log('Tier 2 - Interest = $1.00, Processing Fee = $3.00');
    //     interest = 1;
    //     processing = 3;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 14.99){

    //     console.log('Tier 3 - Interest = $1.25, Processing Fee = $4.00');
    //     interest = 1.25;
    //     processing = 4;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 19.99){

    //     console.log('Tier 4 - Interest = $1.25, Processing Fee = $4.50');
    //     interest = 1.25;
    //     processing = 4.5;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 24.99){

    //     console.log('Tier 5 - Interest = $1.50, Processing Fee = $5.00');
    //     interest = 1.5;
    //     processing = 5;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 29.99){

    //     console.log('Tier 6 - Interest = $1.75, Processing Fee = $5.50');
    //     interest = 1.75;
    //     processing = 5.5;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 34.99){

    //     console.log('Tier 7 - Interest = $1.75, Processing Fee = $6.00');
    //     interest = 1.75;
    //     processing = 6;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 39.99){

    //     console.log('Tier 8 - Interest = $2.00, Processing Fee = $6.50');
    //     interest = 2;
    //     processing = 6.5;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 44.99){

    //     console.log('Tier 9 - Interest = $2.25, Processing Fee = $7.00');
    //     interest = 2.25;
    //     processing = 7;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 49.99){

    //     console.log('Tier 10 - Interest = $2.25, Processing Fee = $7.50');
    //     interest = 2.25;
    //     processing = 7.5;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 59.99){

    //     console.log('Tier 11 - Interest = $2.50, Processing Fee = 15%');
    //     interest = 2.5;
    //     processing = amount/100*15;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 69.99){

    //     console.log('Tier 12 - Interest = $2.75, Processing Fee = 15%');
    //     interest = 2.75;
    //     processing = amount/100*15;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 79.99){

    //     console.log('Tier 13 - Interest = $3.00, Processing Fee = 15%');
    //     interest = 3;
    //     processing = amount/100*15;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 89.99){

    //     console.log('Tier 14 - Interest = $3.25, Processing Fee = 15%');
    //     interest = 3.25;
    //     processing = amount/100*15;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 99.99){

    //     console.log('Tier 15 - Interest = $3.50, Processing Fee = 15%');
    //     interest = 3.5;
    //     processing = amount/100*15;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 249.99){

    //     console.log('Tier 16 - Interest = 4%, Processing Fee = 13%');
    //     interest = amount/100*4;
    //     processing = amount/100*13;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 499.99){

    //     console.log('Tier 17 - Interest = 4%, Processing Fee = 10%');
    //     console.log(amount + ' @ the 401 level');
    //     interest = amount/100*4;
    //     processing = amount/100*10;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 999.99){

    //     console.log('Tier 18 - Interest = 4%, Processing Fee = 8%');
    //     interest = amount/100*4;
    //     processing = amount/100*8;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 1499.99){

    //     console.log('Tier 19 - Interest = 4%, Processing Fee = 7.5%');
    //     interest = amount/100*4;
    //     processing = amount/100*7.5;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount <= 1999.99){

    //     console.log('Tier 20 - Interest = 4%, Processing Fee = 7%');
    //     interest = amount/100*4;
    //     processing = amount/100*7;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else if (amount > 2000){

    //     console.log('Tier 21 - Interest = 4%, Processing Fee = 6%');
    //     interest = amount/100*4;
    //     processing = amount/100*6;
    //     console.log('Your interest rate = $' + interest.toFixed(2));
    //     console.log('Your processing rate = $' + processing.toFixed(2));

    //   } else {

    //     console.log('Something went horribly wrong - please try again, check your input and worst case... get drunk until I fix what\'s wrong!');

    //   }
    // };

    // processingInterest(amount);

    // console.log('After procInt called, amount = ' + amount);
    // console.log('After procInt called, interest = ' + interest);
    // console.log('After procInt called, processing = ' + processing);
    // console.log('After procInt called, storage = ' + storage);

    // console.log((amount-0) + (interest-0);

    // let rates = function(){

    //   let first = Number(amount) + Number(interest) + Number(processing) + Number(storage);
    //   let second = first + Number(interest) + Number(storage);
    //   let third = second + Number(interest) + Number(storage);
    //   let late = third + Number(interest) + Number(storage) + Number(lateFee);
    //   let final = late + Number(interest) + Number(storage) + Number(lateFee);

    //   console.log('First Thirty days = $' + first.toFixed(2));
    //   console.log('Second Thirty days = $' + second.toFixed(2));
    //   console.log('Third Thirty days = $' + third.toFixed(2));
    //   console.log('Late Thirty days = $' + late.toFixed(2));
    //   console.log('Final five days = $' + final.toFixed(2));

    // }

    // rates();


    // Boolean for later user Info.
    // let forfeit;

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
            <input id="loanInput" type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <p>Have you lost your pawn agreement form?</p>
          <input type="checkbox" />
          <p>Is the item a Firearm?</p>
          <input type="checkbox" />
          <input id="loanSubmit" type="submit" value="Submit" />
        </form>
        {/* <div id="loanAmount">
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
        </span> */}
      </div>
    );
  }
}

export default Loan;