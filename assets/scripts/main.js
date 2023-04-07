
const Simulation = require('././simulation');
const DisplayConfiguration = require('././display');
const d3 = require('d3')

// object that will handle input to d3.js 
let displayConfiguration =  new DisplayConfiguration();


// should but tested but currently cannot test for DOM changes - would need react for that (but is beyond scope of this project).
const diagram = document.getElementById('main-diagram')
displayConfiguration.height = diagram.clientHeight;
displayConfiguration.width = diagram.clientWidth;

// update distance between midlines and stick lenghts. This probably should have a listener to observe if browser window changes
displayConfiguration.calculateDistanceBetweenMidLines()
displayConfiguration.calculateStickLengthOnScreen()

// start a simulation. Its behaviour will be contolled via events. 
const simulation = new Simulation();

// start with an empty diagram
sticks = [];
simulation.sticks = [];
svg = drawEmptyDiagram( displayConfiguration )
drawMidlines( svg, displayConfiguration )

// add an event listener to throw button 
document.getElementById('hero-throw').addEventListener( "click", function() {
   
    // use here the actual slider for the number of sticks per throw
    slider = document.getElementsByClassName('slider')[0];

    const numberOfRepetitions = slider.value  ;
    for (let i = 0; i < numberOfRepetitions ; i++) {
       simulation.addNewRandomStick()
    }
    simulation.assignRandomSectorOnDisplay( displayConfiguration.numberOfMidlines + 1  )
    simulation.assignColours()
    simulation.estimatePi();

    const totalNumberOfSticks = simulation.sticks.length;
    const newPosition = simulation.sticks[totalNumberOfSticks-1].position;
    const newOrientation = simulation.sticks[totalNumberOfSticks-1].orientation;
    const newColour = simulation.sticks[totalNumberOfSticks-1].colour;
    const newSector = simulation.sticks[totalNumberOfSticks-1].sector;
    console.log( `(x : ${newPosition.toFixed(2)} ) , ( angle : ${newOrientation.toFixed(2)} ) , in sector : ${newSector} ->  ( color :  ${newColour}) ,  with ${totalNumberOfSticks} sticks in total` )

    // adding a random offset  just for a nicer display. the actual calculation is done within the first vertical lines 
    // but do this randomization just once.
    // same for height - this has no effect on calculating pi 
    // this will require some though - maybe add a tag if random offset has been calculated
    //const randomOffset =   Math.floor(numberOfMidlines * Math.random()) 
    //const randomHeight =  height * ( Math.random() - 0.5) 

    // for now, lets just assign the sticks to the result of the simulation 
    sticks = simulation.sticks;

    svg = drawEmptyDiagram( displayConfiguration )
    drawMidlines( svg , displayConfiguration  )
    drawSticks( svg,  sticks, displayConfiguration )

    //  display the updated Pi estimate 
    let span = document.getElementById('pi-estimate');
    span.innerHTML = `<bold> ${simulation.estimatedValueOfPi.toFixed(6)} </bold>`

    //display total number of sticks used in the simulation
    span = document.getElementById('number-sticks');
    span.innerHTML = `<bold> ${simulation.sticks.length} </bold>`

})

// listener when the slider value changes 
document.getElementsByClassName('slider')[0].addEventListener( 'change', function(){

    // update also the slider count 
    const span = document.getElementById('slider-count')
    span.innerHTML = `<bold> ${this.value} </bold>`
})

// listener to the clear button to remove the elements of the sticks array
 document.getElementById('hero-reset').addEventListener( 'click', function() { 

    console.log('Reset Button pushed - Removing all elements from Display')
    sticks = [];
    simulation.sticks = [];
    svg = drawEmptyDiagram( displayConfiguration )
    drawMidlines( svg , displayConfiguration )

 })




