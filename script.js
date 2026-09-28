const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {   // func for wrong input
 // console.log("original string: ",str);    // for testing cleanInputString func 
 const regex = /[+-\s]/g;  // variable for replacement of + - and space
 return str.replace(/regex/g,'');  // return of + - and space as empty char ('') 
}
// console.log(cleanInputString("+-99"));    // for testing cleanInputString func

function isInvalidInput(str) {   //   to filter exponential notation
 const regex = /\d+e\d+/i;
 return str.match(regex);
}
console.log(isInvalidInput("1e3");

