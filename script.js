const billInput = document.querySelector('#bill');
const percentageButton = document.querySelectorAll('.tip__values--item');
const numberOfPeople = document.querySelector('#people');
const tipAmount = document.querySelector('.result__amount--price');
const totalBill = document.querySelector('.result__total--price');
const reset = document.querySelector('button');
const customBill = percentageButton[percentageButton.length - 1];
const peopleAlert = document.querySelector('.people__alert');
let billValue, peopleValue, clickedButton, customBillValue;

const catchBill = (e) => {
	billValue = Number(e.target.value);
	calculateBill();
};

const catchPeople = (e) => {
	peopleValue = Number(e.target.value);
	if (peopleValue == 0) {
		peopleAlert.style.display = 'block';
		resetFunction();
	} else {
		peopleAlert.style.display = 'none';
		calculateBill();
	}
};

const handleButtons = (e) => {
	clickedButton = Number(e.target.textContent);
	calculateBill();
};

const handleCustomBill = (e) => {
	clickedButton = e.target.value;
	calculateBill();
};

const calculateBill = () => {
	let tipPerPerson = (
		(billValue * clickedButton) /
		(100 * peopleValue)
	).toFixed(2);

	let totalPerPerson = (
		billValue / peopleValue +
		Number(tipPerPerson)
	).toFixed(2);

	display(Number(tipPerPerson), Number(totalPerPerson));
};

const display = (tipPerPerson, totalPerPerson) => {
	if (
		!isNaN(tipPerPerson) &&
		!isNaN(totalPerPerson) &&
		isFinite(tipPerPerson) &&
		isFinite(totalPerPerson)
	) {
		tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
		totalBill.textContent = `$${totalPerPerson.toFixed(2)}`;
	}
};

const resetFunction = () => {
	console.log('here');
	billInput.value = '';
	numberOfPeople.value = '';
	billValue = 0;
	peopleValue = 0;
	clickedButton = 0;
	customBillValue = 0;
	tipAmount.textContent = `$0.00`;
	totalBill.textContent = `$0.00`;
};

billInput.addEventListener('keyup', catchBill);
numberOfPeople.addEventListener('keyup', catchPeople);
percentageButton.forEach((btn) => {
	btn.addEventListener('click', handleButtons);
});
customBill.addEventListener('keyup', handleCustomBill);
reset.addEventListener('click', resetFunction);
