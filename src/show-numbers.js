import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { listItems } from './utils/list-items.js';

const showNumbers = () => {
  debugger;

  // generate a string list of all numbers (use the util!)

  // 1st way

  let showNum = ('show-them', numbers);

  // 2ed way
  // ('show-them', numbers)

  // 3 way
  // let showNum = ('show-them', numbers);
  // let getNum = showNum;

  // display the list of numbers to the UI
  display('secret-solution', listItems(showNum));
};

// !! fill in this blank with the correct DOM ID
document.getElementById('show-them').addEventListener('click', showNumbers);
