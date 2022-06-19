import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { divide } from './utils/divide.js';

const divideNumber = () => {
  const toDivide = divide(numbers);

  display('your-output', toDivide);
};
document.getElementById('divide-by-2').addEventListener('click', divideNumber);
