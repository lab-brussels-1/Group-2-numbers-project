import { numbers } from '../numbers.js';

import { readNumber, display } from '../lib/dom-io.js';

import { listItems } from './utils/list-items.js';

const addNumber = () => {
  // read the user's number
  const newNumber = readNumber('the-num');

  // add it to the array of numbers
  numbers.push(newNumber);
  // generate and display a string listing all numbers
  display('your-output', listItems(numbers));
  display('secret-solution', listItems(numbers));
};

// !! fill in this blank with the correct DOM ID
document.getElementById('add-it').addEventListener('click', addNumber);
