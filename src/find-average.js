import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { average } from './utils/average.js';

debugger;

const findAverage = () => {
  // calculate the average of all saved numbers  (use your util function!)
  const avgNo = average(numbers);

  // display the average in the UI
  display('secret-solution', `Average = ${avgNo}`);
};

// !! fill in this blank with the correct DOM ID
document.getElementById('average-them').addEventListener('click', findAverage);
