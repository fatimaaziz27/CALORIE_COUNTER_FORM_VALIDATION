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
 entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;   // template literal
 
 HTMLstring = 
  `<label for = "${entryDropdown.value}-${entryNumber}-name"> Entry ${entryNumber} Name</label>   
   <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
   <label for = "${entryDropdown.value}-${entryNumber}-calories"> Entry ${entryNumber} calories</label>
  <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />`;   // template literal
 
 targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

addEntryButton.addEventListener("click",addEntry);



function getCaloriesFromInputs(list) {
 let calories = 0;
 
 for (const item of list) {
  const currVal = cleanInputString(item.value);
  const invalidInputMatch = isInvalidInput(currVal);
  
  if (invalidInputMatch){
   alert(`Invalid Input: ${invalidInputMatch[0]}`);
   const 
   isError = true;
   return null;
  }
   calories += Num(currVal);
 }
 return calories;
}




function calculateCalories(e){
 e.preventDefault();
 isError = false;
 
 const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
 const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
 const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
 const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
 const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");

 const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
 const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
 const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
 const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
 const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
 const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

 if (isError){
  return;
 }
 
 const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
 const remainingCalories = consumedCalories - budgetCalories + exerciseCalories;
 
 const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';  // with ternary operator 

 output.innerHTML = `<span class= "${surplusOrDeficit.toLowerCase()}"> ${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit} </span> <hr>`; // template literal 
 
}
