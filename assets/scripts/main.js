
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


// run a simulation - in the next step this will be contolled via events 
simulation = new Simulation();

// store all the current sticks in this data structure
sticks = []

// add an event listener to throw button 
document.getElementById('hero-throw').addEventListener( "click", function() {
   
    const numberOfRepetitions = 1  ;
    for (let i = 0; i < numberOfRepetitions ; i++) {
       simulation.addNewRandomStick()
    }
    simulation.assignColours()
    simulation.estimatePi();

    // for now, lets just assign the sticks to the result of the simulation 
    sticks = sticks.concat( simulation.sticks);

    console.log( sticks)

    svg = drawEmptyDiagram( width, height )
    drawMidlines( svg , width, height )
    drawSticks( svg,  sticks, stickLengthOnScreen )

})

// listener to the clear button to remove the elements of the sticks array
 document.getElementById('hero-reset').addEventListener( 'click', function() { 

    console.log('Reset Button pushed - Removing all elements from Display')
    sticks = [];
    svg = drawEmptyDiagram( width, height )
    drawMidlines( svg , width, height )

 })




