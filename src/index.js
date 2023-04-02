import { keyValue, sayHelloWorld } from './components/variables.js';
import { add } from '../src/sum.js'
import { buttonClick } from './sum.js';

console.log(keyValue);
sayHelloWorld();
console.log(keyValue);

const data = [1, 2, 3, 4, 5];
const sumValue =  add(40,2)
console.log(`D3 says --> 2 + 40 is ${sumValue}`);

document.getElementById('button').addEventListener('click', function() {
    console.log('well the button is clicked, i can tell you that!')
    buttonClick();
})

