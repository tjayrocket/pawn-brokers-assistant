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


  // This fires off when I hit submit. The goal is to add the necessary logic to populate the screen with accurate numbers. This will take a bit but most of the logic has been recycled from the other repo.

  handleSubmit(event) {

    event.preventDefault();

    //This sets the base amount to a localized variable. Handy for later. Assigned by the input field.

    let amount = this.state.value;

    // Defining essential variables for later use
    let storage = 5;
    let lateFee = 10;
    let firearmFee = 5;
    let missingTicketFee = 5;
    
    // Defining booleans for selector functionality.

    let firearm = false;
    let missingTicket = false;

    // Boolean for later user Info.

    let forfeit = false;

    // Defining these variables for processingInterest function.

    let interest;
    let processing;

    // This function validates the input of numbers into the form.

    function loanValidate(){
      if(amount === ''){
        alert('Please enter a loan amount.');
        return false;
      } else if(amount[0] === '$'){
        alert('The \'$\' is not necessary - please, remove it.');
        return false;
      } else if(isNaN(amount)){
        alert('Enter Numbers Only, Please.');
        return false;
      } else {
        return true;
      }
    };

    // This funtion takes in the amount and determines both the Interest Rate and Processing Fee. This is based of the RCW information.

    let processingInterest = function(amount){
      if(amount <= 4.99){
        interest = 1;
        processing = 1.5;
      } else if (amount <= 9.99){
        interest = 1;
        processing = 3;
      } else if (amount <= 14.99){
        interest = 1.25;
        processing = 4;
      } else if (amount <= 19.99){
        interest = 1.25;
        processing = 4.5;
      } else if (amount <= 24.99){
        interest = 1.5;
        processing = 5;
      } else if (amount <= 29.99){
        interest = 1.75;
        processing = 5.5;
      } else if (amount <= 34.99){
        interest = 1.75;
        processing = 6;
      } else if (amount <= 39.99){
        interest = 2;
        processing = 6.5;
      } else if (amount <= 44.99){
        interest = 2.25;
        processing = 7;
      } else if (amount <= 49.99){
        interest = 2.25;
        processing = 7.5;
      } else if (amount <= 59.99){
        interest = 2.5;
        processing = amount/100*15;
      } else if (amount <= 69.99){
        interest = 2.75;
        processing = amount/100*15;
      } else if (amount <= 79.99){
        interest = 3;
        processing = amount/100*15;
      } else if (amount <= 89.99){
        interest = 3.25;
        processing = amount/100*15;
      } else if (amount <= 99.99){
        interest = 3.5;
        processing = amount/100*15;
      } else if (amount <= 249.99){
        interest = amount/100*4;
        processing = amount/100*13;
      } else if (amount <= 499.99){
        interest = amount/100*4;
        processing = amount/100*10;
      } else if (amount <= 999.99){
        interest = amount/100*4;
        processing = amount/100*8;
      } else if (amount <= 1499.99){
        interest = amount/100*4;
        processing = amount/100*7.5;
      } else if (amount <= 1999.99){
        interest = amount/100*4;
        processing = amount/100*7;
      } else if (amount > 2000){
        interest = amount/100*4;
        processing = amount/100*6;
      } else {
        alert('Something went horribly wrong - please try again.');
      }
    };

    // This function takes the info, and combines it into easy to read rates for posting.
    
    let rates = function(){
      // These set the costs for the 30 day periods.
      let first = Number(amount) + Number(interest) + Number(processing) + Number(storage);
      let second = first + Number(interest) + Number(storage);
      let third = second + Number(interest) + Number(storage);
      let late = third + Number(interest) + Number(storage) + Number(lateFee);
      let final = late + Number(interest) + Number(storage) + Number(lateFee);
      // These get the elements on the DOM.
      let thirtyBlock = document.getElementById('loanThirtyNumber');
      let sixtyBlock = document.getElementById('loanSixtyNumber');
      let ninetyBlock = document.getElementById('loanNinetyNumber');
      let oneTwentyBlock = document.getElementById('loanOneTwentyNumber');
      let finalBlock = document.getElementById('loanFinalNumber');
      // And these update the numbers in the Dom Elements.
      thirtyBlock.innerHTML = '$' + Number(first).toFixed(2);
      sixtyBlock.innerHTML = '$' + Number(second).toFixed(2);
      ninetyBlock.innerHTML = '$' + Number(third).toFixed(2);
      oneTwentyBlock.innerHTML = '$' + Number(late).toFixed(2);
      finalBlock.innerHTML = '$' + Number(final).toFixed(2);
    };
    
    // This function gets and sets the variable amounts for loans defined by user input.

    function postNumbers(){
      //Grabs the text in the blocks
      let amountBlock = document.getElementById('loanOneRate');
      let storageBlock = document.getElementById('storageRate');
      let interestBlock = document.getElementById('interestRate');
      let processingBlock = document.getElementById('processingRate');
      // Places the amounts into the blocks.
      amountBlock.innerHTML = '$' + Number(amount).toFixed(2);
      storageBlock.innerHTML = '$' + Number(storage).toFixed(2);
      interestBlock.innerHTML = '$' + Number(interest).toFixed(2);
      processingBlock.innerHTML = '$' + Number(processing).toFixed(2);
    }
    
    // This function posts all the numbers to the page - it is the last thing to fire off when the submit button is pressed. It must pass the loan validation function to render, else - it throws an error and won't update. Secondary validation? You bet your sweet HONEY BAKED HAM it is!
    
    function postData(){
      if(loanValidate() === false){
        console.log('Borked');
      } else {
        processingInterest(amount);
        rates();
        postNumbers();
      }
    };
    
    // This final function call knocks down the dominoes...
    postData();
  };
  
  // This down here - it renders everything to the page.
  
  render() {
    return (
      <div id="loan">
        <form id="loanForm" className="subText" onSubmit={this.handleSubmit}>
          <label>Please Enter Your Loan Amount:{' '}
            <input id="loanInput" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>Do you have your pawn contract?{' '}
            <select id="loanTicket" className="loanSelect">
              <option>---</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
          <br />
          <label>Is the item on loan a Firearm?{' '}
            <select id="loanFirearm" className="loanSelect">
              <option>---</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
          <br />
          <input id="loanSubmit" type="submit" value="Submit" />
        </form>
        <p className="subText" >Your Loan Amount Is:</p>
        <div id="loanAmount">
          <p id="loanOneRate" className="loanText">$0.00</p>
        </div>
        <span id="loanRatesBlock">
            <div id="processing" className="loanRates">
              <p id="processingText" className="loanRateText">Processing Fee:</p>
              <p id="processingRate" className="loanRateNumber">$0.00</p>
            </div>
            <div id="interest" className="loanRates">
              <p id="interestText" className="loanRateText">Loan Interest:</p>
              <p id="interestRate" className="loanRateNumber">$0.00</p>
            </div>  
            <div id="storage" className="loanRates">
              <p id="storageText" className="loanRateText">Item Storage:</p>
              <p id="storageRate" className="loanRateNumber">$0.00</p>
            </div>
            <div id="firearm" className="loanRates">
              <p id="firearmText" className="loanRateText">Firearm Storage:</p>
              <p id="firearmRate" className="loanRateNumber">$0.00</p>
            </div>
            <div id="missingTicket" className="loanRates">
              <p id="missingTicketText" className="loanRateText">Missing Ticket:</p>
              <p id="missingTicketRate" className="loanRateNumber">$0.00</p>
            </div>
        </span>
        <br />
        <span id="loanAmounts">
          <div id="loanThirty" className="loanAmount">
            <p id="loanThirtyText" className="loanAmountText">0 - 30 Days:</p>
            <p id="loanThirtyNumber" className="loanAmountNumber">$0.00</p>
          </div>
          <div id="loanSixty" className="loanAmount">
            <p id="loanSixtyText" className="loanAmountText">31 - 60 Days:</p>
            <p id="loanSixtyNumber" className="loanAmountNumber">$0.00</p>
          </div>
          <div id="loanNinety" className="loanAmount">
            <p id="loanNinetyText" className="loanAmountText">61 - 90 Days:</p>
            <p id="loanNinetyNumber" className="loanAmountNumber">$0.00</p>
          </div>
          <div id="loanOneTwenty" className="loanAmount">
            <p id="loanOneTwentyText" className="loanAmountText">91 - 120 Days:</p>
            <p id="loanOneTwentyNumber" className="loanAmountNumber">$0.00</p>
          </div>
          <div id="loanFinal" className="loanAmount">
            <p id="loanFinalText" className="loanAmountText">121 - 125 Days:</p>
            <p id="loanFinalNumber" className="loanAmountNumber">$0.00</p>
          </div>
        </span>
      </div>
    );
  }
}

export default Loan;





