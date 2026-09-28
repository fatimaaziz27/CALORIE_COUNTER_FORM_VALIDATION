const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {   // func for wrong input
 const regex = /[+-\s]/g;  // variable for replacement of + - and space
 return str.replace(/regex/g,'');  // return of + - and space as empty char ('') 
}
