
const Simulation = require('././simulation');
const Display = require('././display');
const d3 = require('d3')

const model = new Simulation();
const testAngles = [
    {position: 0.0, orientation: 0 },
    {position: 0.0, orientation: 80 },
    {position: 0.5, orientation: 90 },
    {position: 1.0, orientation: 90 }
]
for (let testAngle  of testAngles){ 
    model.addNewStick( testAngle)
}
model.assignColours();


console.log(model)

const result = d3.sum([40, 2 ])
console.log(`Hey, d3 works in the browser! 40 + 2 = ${result}`)

console.log(`-> trying to draw a diagram now.`)

const testDisplay =  new Display();
