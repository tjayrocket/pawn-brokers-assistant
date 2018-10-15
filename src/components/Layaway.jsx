import React from 'react';

class Layaway extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="Layaway">
        <p>This is the Layaway Page</p>
      </div>
    );
  }

}

export default Layaway;

let price;
let deposit;

// function lay(price, deposit){
	
// 	let price = a;
// 	let tax = price/10;
// 	let fullPrice = price + tax;
	
// 	let deposit = b;
	
// 	function depositValidate(deposit){
// 		if(deposit < 10){
// 			deposit = 10;
// 			return deposit;
// 		} else {
// 			return deposit;
// 		};
// 	};
	
// 	depositValidate();
	
// 	console.log(deposit);
	
// 	let days;
// 	let rate;
// 	let finalRate
// 	let payments;
// 	let paymentAmount;
	
	
// 	console.log('Layaway price = $' + price);
// 	console.log('Layaway tax = $' + tax);
// 	console.log('Layaway full price = $' + fullPrice);
	
// 	console.log('Layaway deposit = $' + deposit);
	
	
	
// 	// console.log('Your layaway price is $' + price + ', which includes $' + tax +' sales tax, giving you a final price of $' + fullPrice + '. You will have ' + days ' days to pay off your purchase. Your minimum deposit will be ' + deposit ', and you will make ' + payments + ' of')
	
// }