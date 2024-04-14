// Basic calculations

const add = function(a, b) {
    return a + b;
}
  
const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

// Button variables

const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const zeroBtn = document.querySelector("#zero");
const equalBtn = document.querySelector("#equal");
const addBtn = document.querySelector("#add");
const minusBtn = document.querySelector("#minus");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const clearBtn = document.querySelector("#clear");

const mainDisplay = document.querySelector("#main");
const secondaryDisplay = document.querySelector("#secondary");

//Values Container

let values = {
    operandOne: null,
    operandTwo: null,
    operator: null,
};

let mainDisplayText = "";
let secondaryDisplayText = "";

//Buttons

oneBtn.addEventListener('click', updateMainDisplay);
twoBtn.addEventListener('click', updateMainDisplay);
threeBtn.addEventListener('click', updateMainDisplay);
fourBtn.addEventListener('click', updateMainDisplay);
fiveBtn.addEventListener('click', updateMainDisplay);
sixBtn.addEventListener('click', updateMainDisplay);
sevenBtn.addEventListener('click', updateMainDisplay);
eightBtn.addEventListener('click', updateMainDisplay);
nineBtn.addEventListener('click', updateMainDisplay);
addBtn.addEventListener('click', assignOperator);
clearBtn.addEventListener('click', clearAll);

//Functions

const strToNum = {one: 1,  two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9};
const wordToNumber = word => Number(strToNum[word.toLowerCase()]);

const btnToSymbol = {add: "+",  minus: "-", multiply: "*", divide: "/"};
const oprtToSymbol = word => btnToSymbol[word.toLowerCase()];

function updateMainDisplay(event) {
    let input = event.target.id;
    input = wordToNumber(input);
    mainDisplayText = mainDisplayText + input.toString();
    mainDisplay.textContent = mainDisplayText;
}

function clearAll() {
    mainDisplayText = "0";
    mainDisplay.textContent = mainDisplayText;
    secondaryDisplayText = "";
    secondaryDisplay.textContent = secondaryDisplayText;
    values.operandOne = null;
    values.operandTwo = null;
    values.operator = null;
}

function assignOperator(event) {
    let input = event.target.id;
    input = oprtToSymbol(input);
    values.operator = input.toString();
    values.operandOne = mainDisplayText;
    secondaryDisplayText = mainDisplayText
    secondaryDisplay.textContent = secondaryDisplayText;
    mainDisplay.textContent = "0";
    mainDisplayText = "";
    console.log(values.operandOne);
    console.log(values.operator);
}