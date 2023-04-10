
const Simulation = require('././simulation');
const DisplayConfiguration = require('././display');
const Stick = require('././stick');

const d3 = require('d3');

// object that will handle input to d3.js 
let displayConfiguration =  new DisplayConfiguration();

// should but tested but currently cannot test for DOM changes - would need react for that (but is beyond scope of this project).
const diagram = document.getElementById('main-diagram');
displayConfiguration.height = diagram.clientHeight;
displayConfiguration.width = diagram.clientWidth;
displayConfiguration.displaySelector = '#main-diagram';

// update distance between midlines and stick lenghts. This probably should have a listener to observe if browser window changes
displayConfiguration.calculateDistanceBetweenMidLines();
displayConfiguration.calculateStickLengthOnScreen();

// start a simulation. Its behaviour will be contolled via events. 
const simulation = new Simulation();

// start with an empty diagram
let sticks = [];
simulation.sticks = [];
svg = drawEmptyDiagram( displayConfiguration );
drawMidlines( svg, displayConfiguration );

// add an event listener to throw button 
document.getElementById('hero-throw').addEventListener( "click", function() {
   
    // use here the actual slider for the number of sticks per throw
    slider = document.getElementsByClassName('slider')[0];

    const numberOfRepetitions = slider.value  ;
    for (let i = 0; i < numberOfRepetitions ; i++) {
       simulation.addNewRandomStick();
    }
    simulation.assignRandomSectorOnDisplay( displayConfiguration.numberOfMidlines  );
    simulation.assignRandomVerticalOffsetOnDisplay();
    simulation.assignColours();
    simulation.estimatePi();

    const totalNumberOfSticks = simulation.sticks.length;
    const newPosition = simulation.sticks[totalNumberOfSticks-1].position;
    const newOrientation = simulation.sticks[totalNumberOfSticks-1].orientation;
    const newColour = simulation.sticks[totalNumberOfSticks-1].colour;
    const newSector = simulation.sticks[totalNumberOfSticks-1].sector;
    const newVerticalOffset= simulation.sticks[totalNumberOfSticks-1].verticalOffsetOnScreen;
   
    // for now, lets just assign the sticks to the result of the simulation 
    sticks = simulation.sticks;
    svg = drawEmptyDiagram( displayConfiguration );
    drawMidlines( svg , displayConfiguration  );
    drawSticks( svg,  sticks, displayConfiguration );

    //display total number of sticks used in the simulation
    span = document.getElementById('red-sticks');
    span.innerHTML = `<bold> ${simulation.stickCounter.red}  </bold>`;

    //display total number of sticks used in the simulation
    span = document.getElementById('green-sticks');
    span.innerHTML = `<bold> ${simulation.stickCounter.green}  </bold>`;

    if ( totalNumberOfSticks > 3) {
            span = document.getElementById('more-than-3');
            innerHTML = `
            ${totalNumberOfSticks} sticks, divided by half of number of red sticks, 
            was ..... ${simulation.estimatedValueOfPi.toFixed(6)}      
            Wait a moment! Is that no me? , wondered Pi.`;
            span.innerHTML = innerHTML;
    }

    //  update the scatter plot on the third panel 
    const tempDisplayConfiguration = DisplayConfiguration.from( displayConfiguration );
    const scatterDiagram = document.getElementById('scatter-diagram');

    tempDisplayConfiguration.height = scatterDiagram.clientHeight ;
    tempDisplayConfiguration.width = scatterDiagram.clientWidth;
    tempDisplayConfiguration.displaySelector = '#scatter-diagram';

    svgScatter = drawEmptyDiagram( tempDisplayConfiguration );
    drawScatterDiagram( sticks, svgScatter, tempDisplayConfiguration );

    // add to last diagragm
    document.getElementById('total-sticks').innerHTML = `${totalNumberOfSticks}`;

});

// listener when the slider value changes 
document.getElementsByClassName('slider')[0].addEventListener( 'change', function(){

    // update also the slider count 
    const span = document.getElementById('slider-count');
    span.innerHTML = `<bold> ${this.value} </bold>`;
});

// listener to the clear button to remove the elements of the sticks array
 document.getElementById('hero-reset').addEventListener( 'click', function() { 

    console.log('Reset Button pushed - Removing all elements from Display');
    sticks = [];
    simulation.sticks = [];
    svg = drawEmptyDiagram( displayConfiguration );
    drawMidlines( svg , displayConfiguration );

    // reset also the scatter plot 
    d3.select( '#scatter-plot')
        .select('svg')
        .remove();

    // reset also the text on the first diagram 
    span = document.getElementById('red-sticks');
    span.innerHTML = `<bold> ${simulation.stickCounter.red}  </bold>`;

    //display total number of sticks used in the simulation
    span = document.getElementById('green-sticks');
    span.innerHTML = `<bold> ${simulation.stickCounter.green}  </bold>`;

    // reset also second text
    document.getElementById('more-than-3').innerHTML = " <br><br>";

    //reset for last diagragm
    document.getElementById('total-sticks').innerHTML = "";

     //  update the scatter plot on the third panel 
     const tempDisplayConfiguration = DisplayConfiguration.from( displayConfiguration );
     const scatterDiagram = document.getElementById('scatter-diagram');
 
     tempDisplayConfiguration.height = scatterDiagram.clientHeight ;
     tempDisplayConfiguration.width = scatterDiagram.clientWidth;
     tempDisplayConfiguration.displaySelector = '#scatter-diagram';
 
     svgScatter = drawEmptyDiagram( tempDisplayConfiguration );
     drawScatterDiagram( sticks, svgScatter, tempDisplayConfiguration );

 });

 //listener to the slider on the second diagrm 
document.getElementById('explain-rotate').addEventListener( 'input', function() {
  
    //create a new stick based on the current slider position 
    const stick = new Stick(  {  
                "position": document.getElementById('explain-move').value / 100, 
                "orientation": this.value, 
                "colour": 'green', 
                'sector': 0 ,
                'verticalOffsetOnScreen':0 } );

      // draw this stick on the panel of the second diagram
      drawSecondDiagram( stick);

 });

 // listener to the second slider on the second diagrm 
 document.getElementById('explain-move').addEventListener( 'input', function() {
  
     //create a new stick based on the current slider position 
      const stick = new Stick(  {  
                "position": this.value / 100, 
                "orientation":  document.getElementById('explain-rotate').value, 
                "colour": 'green', 
                'sector': 0 ,
                'verticalOffsetOnScreen':0 } );

      // draw this stick on the panel of the second diagram
      drawSecondDiagram( stick);

 });

 // listener to even that DOM has loaded. add a stick to the second diagram directly.
 //Otherwise, the sticks would only be painted only after the slider has been moved -
 // could have been called outside a listener but I find it easier to read this way. 
 // https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
 window.addEventListener( 'DOMContentLoaded', function() {

      console.log("DOM fully loaded and parsed");

      //create an display of a stick based on the initial slider position 
      const stick = new Stick(  {  
                "position": document.getElementById('explain-move').value / 100, 
                "orientation":  document.getElementById('explain-rotate').value, 
                "colour": 'green', 
                'sector': 0 ,
                'verticalOffsetOnScreen':0 } );

      // draw this stick on the panel of the second diagram
      drawSecondDiagram( stick);

    // reset also second text
    document.getElementById('more-than-3').innerHTML = " <br><br>";

 });

 // to address TC10 : thrid diagram not resizing when changing window size of browser 
 window.addEventListener( 'resize', function () {
    console.log('window size has changed! ')

     //  update the scatter plot on the third panel 
     const tempDisplayConfiguration = DisplayConfiguration.from( displayConfiguration );
     const scatterDiagram = document.getElementById('scatter-diagram');
 
     tempDisplayConfiguration.height = scatterDiagram.clientHeight ;
     tempDisplayConfiguration.width = scatterDiagram.clientWidth;
     tempDisplayConfiguration.displaySelector = '#scatter-diagram';
 
     svgScatter = drawEmptyDiagram( tempDisplayConfiguration );
     drawScatterDiagram( sticks, svgScatter, tempDisplayConfiguration );


 })

// refactor code to remove duplicated code 
function drawSecondDiagram( stick ) {

      //map the position into the sector between the first and second midline
      const mappedPosition = stick.mapPositionIntoFirstSector( stick.position ); 
     
      // the stick will touch the line under this condition for the orientation 
      const stickTouchesMidline =  Math.abs( Math.cos( simulation.toRadians( stick.orientation ) )) > mappedPosition;
           
      // set the color to red if the stick touches - green otherwise 
      stick.colour = stickTouchesMidline ? "red" : 'green';
 
     // create a temp configurator for this diagram 
     const tempDisplayConfiguration = DisplayConfiguration.from( displayConfiguration );
     const diagram = document.getElementById('explain-diagram');
 
      //set display propertoes of the diagram
      tempDisplayConfiguration.displaySelector = '#explain-diagram';
      tempDisplayConfiguration.height = displayConfiguration.height;
      tempDisplayConfiguration.width = displayConfiguration.width;
      tempDisplayConfiguration.numberOfMidlines = displayConfiguration.numberOfMidlines;
      tempDisplayConfiguration.stickLengthOnScreen = displayConfiguration.stickLengthOnScreen ;
      tempDisplayConfiguration.distanceBetweenMidlines = displayConfiguration.distanceBetweenMidlines ;
      tempDisplayConfiguration.numberSticksOnCanvas = 1 ;
 
      // for now, lets just assign the sticks to the result of the simulation 
     explain_sticks = [];
     explain_sticks.push( stick);
 
     // draw empty diagram and add a stick
     const svgExplain  = drawEmptyDiagram( tempDisplayConfiguration );
 
     drawMidlines( svgExplain , tempDisplayConfiguration  );
     drawSticks( svgExplain,  explain_sticks, tempDisplayConfiguration );
}

