import { numbers } from '../numbers.js';

import { readNumber, display } from '../lib/dom-io.js';

import { listItems } from './utils/list-items.js';

const removeNumber = () => {
  debugger;

  // read the user's number
  const rmArray = readNumber('the-num');

  // remove the user's number from the array
  
  for(let i = 0; i<numbers.length; i++){
    numbers[i] === rmArray? numbers.splice(i, 1): 0;
  }
  
  // let newNum = numbers;
  // display the new list of numbers (use the util function!)
  
  display('your-output', listItems(numbers));
};
// !! fill in this blank with the correct DOM ID
document.getElementById('remove-it').addEventListener('click', removeNumber);