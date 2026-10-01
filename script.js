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
// console.log(isInvalidInput("1e3"); // for testing isInvalidInput
// console.log(isInvalidInput("10");

function addEntry(){
 const targetId = '#' + entryDropdown;
 const targetInputContainer = document.querySelector(`${entryDropdown.value} .input-container`);
 entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
 
 HTMLstring = 
  `<label for = "${entryDropdown.value}-${entryNumber}-name"> Entry ${entryNumber} Name</label>
   <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
   <label for = "${entryDropdown.value}-${entryNumber}-calories"> Entry ${entryNumber} calories</label>
  <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />`;
 
 targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}
addEntryButton.addEventListener("click",addEntry);

getCaloriesFromInputs(list){
 // Step 57 ---->
}
