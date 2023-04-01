import { keyValue, sayHelloWorld } from './components/variables.js';
import { getMaxValue } from '../src/diagram.js'

console.log(keyValue);
sayHelloWorld();
console.log(keyValue);

const data = [1, 2, 3, 4, 5];
const maxValue =  getMaxValue(data)
console.log(`D3 says --> the max value of [1,2,3,4,5] is ${maxValue}`);
