import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { multiply } from './utils/multiply.js';

const findMultiple = () => {
  const multiplyNum = multiply(numbers);

  display('your-output', multiplyNum);
};

document
  .getElementById('multiply-them')
  .addEventListener('click', findMultiple);
