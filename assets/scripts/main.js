
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

// start with an empty diagram
sticks = [];
simulation.sticks = [];
svg = drawEmptyDiagram( width, height )
drawMidlines( svg , width, height )

// add an event listener to throw button 
document.getElementById('hero-throw').addEventListener( "click", function() {
   
    const numberOfRepetitions = 1  ;
    for (let i = 0; i < numberOfRepetitions ; i++) {
       simulation.addNewRandomStick()
    }
    simulation.assignColours()
    simulation.estimatePi();

    const totalNumberOfSticks = simulation.sticks.length;
    const newPosition = simulation.sticks[totalNumberOfSticks-1].position;
    const newOrientation = simulation.sticks[totalNumberOfSticks-1].orientation;
    const newColour = simulation.sticks[totalNumberOfSticks-1].colour;
    console.log( `(x : ${newPosition.toFixed(3)} ) , ( angle : ${newOrientation.toFixed(3)} ) ->  ( color :  ${newColour}) ,  with ${totalNumberOfSticks} sticks in total` )

    // adding a random offset  just for a nicer display. the actual calculation is done within the first vertical lines 
    // but do this randomization just once.
    // same for height - this has no effect on calculating pi 
    // this will require some though - maybe add a tag if random offset has been calculated
    //const randomOffset =   Math.floor(numberOfMidlines * Math.random()) 
    //const randomHeight =  height * ( Math.random() - 0.5) 

    // for now, lets just assign the sticks to the result of the simulation 
    sticks = simulation.sticks;

    svg = drawEmptyDiagram( width, height )
    drawMidlines( svg , width, height )
    drawSticks( svg,  sticks, stickLengthOnScreen )

    //  display the updated Pi estimate 
    const span = document.getElementById('pi-estimate');
    span.innerHTML = `<bold> ${simulation.estimatedValueOfPi.toFixed(6)} </bold>`
    


})

// listener to the clear button to remove the elements of the sticks array
 document.getElementById('hero-reset').addEventListener( 'click', function() { 

    console.log('Reset Button pushed - Removing all elements from Display')
    sticks = [];
    simulation.sticks = [];
    svg = drawEmptyDiagram( width, height )
    drawMidlines( svg , width, height )

 })




