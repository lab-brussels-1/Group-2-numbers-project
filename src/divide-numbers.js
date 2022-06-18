import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { divide } from './utils/divide.js';

debugger;

const divideNumber = () => {

//create a var and apply the function

    let toDivide = divide(numbers) ;
// display result

    display('your-output', toDivide);
    
}
document.getElementById('divide-by-2').addEventListener('click', divideNumber);