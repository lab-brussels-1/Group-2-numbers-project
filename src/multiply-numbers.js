import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { multiply } from './utils/multiply.js';

 debugger;

const findMultiple = () => {
let multiplyNum = multiply(numbers);

display('your-output', multiplyNum);
}

document.getElementById('multiply-them').addEventListener('click', findMultiple);