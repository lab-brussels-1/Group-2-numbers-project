import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { sum } from './utils/sum.js';

const findSum = () => {
  // add together all the saved numbers (use your util function!)
  const findSumNo = sum(numbers);

  // display the sum of all numbers in the DOM
  display('secret-solution', `Sum = ${findSumNo}`);
  display('your-output', findSumNo);
};

// !! fill in this blank with the correct DOM ID
document.getElementById('sum-them').addEventListener('click', findSum);
