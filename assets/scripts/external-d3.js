console.log(`->OK now let's test some D3.`)

// let's fake some input of some sticks to display. 
let sticks = [ 
    { "position": 0.85, "orientation": 90, "colour":'green' } ,
    { "position": 0.5, "orientation": 60,  "colour":'red' } ,
    { "position": 0.15, "orientation": 0 , "colour":'red' } ,
 ];


// this will be variable too later but for testing I will hard-code it.
const diagram = document.getElementById('main-diagram')
var height = diagram.clientHeight;
var width = diagram.clientWidth;

// takes care that the lines at the border of the SVG are drawn fully
const numberOfMidlines = 5;
const spaceAtBorder = 16; 
let distanceBetweenMidlines = ( width - spaceAtBorder)  / (numberOfMidlines - 1);

//  stick length needs to be half the distance between midlines for this to be accurate.
const midlineStrokeWidth = 8;
let stickLengthOnScreen =  distanceBetweenMidlines / 2 - midlineStrokeWidth / 2;

// now call the functions to draw the elements 
console.log(sticks)
svg = drawEmptyDiagram( width, height )
drawMidlines( svg , width, height )
drawSticks( svg,  sticks, stickLengthOnScreen )

/**
 * This function draws an empty svg element on the DOM, returns d3 SVG element
 */
function drawEmptyDiagram( width , height) {

    // also hard coded for now - this should evenutally become variable, too.
    const margin = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }

    // create empty svg
    d3.select("svg").remove();
    const svg = d3.select("#main-diagram")
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.bottom + margin.top)
    .append('g')
    .attr('transform', `translate( ${margin.left} , ${margin.top} )`)

    // make the background transparent 
    svg.fillStyle = "#FF0000";

    return svg
}

/**
 *  This function will eventually draw all the sticks on the canvas 
 * Rotation and Translation based from : 
 * https://www.tutorialspoint.com/d3js/d3js_svg_transformation.htm
 */
 function drawSticks( svg, sticks, stickLengthOnScreen ) {
   
       console.log( ` lenght of the stick is ${stickLengthOnScreen}`)

       // create a scale for the input data 
       const xScale = d3.scaleLinear() 
       .domain([ 0, 2 ])
       .range([ 0, ( width - 16)  / ( numberOfMidlines - 1) ])

    // now create a circle and move its position 
    let dataset = [];
    for (let i in sticks) {
        // adding a random offset just for a nicer display. the actual calculation is done within the first vertical lines 
        // same for height - this has no effect on calculating pi 
        const randomOffset =  0 //( numberOfMidlines * Math.random() ) 
        const randomHeight =  height * ( Math.random() - 0.5) 

        dataset.push( { 
            x: sticks[i].position + randomOffset,  
            y: 100 + randomHeight,
            color: sticks[i].colour,
            orientation: sticks[i].orientation 
         } )
    }

    svg.selectAll("test-sticks")
        .data(dataset)
        .enter()
        .append('ellipse')
        .attr('cx', function (d) {
             console.log(` x is ${d.x} but scaled it is ${xScale(d.x)}`)
            return xScale(d.x)
        })
        .attr('cy', function (d) {
            return d.y
        })
        .attr("rx", stickLengthOnScreen )
        .attr("ry", stickLengthOnScreen / 4)
        .attr('fill', function (d) {
            return d.color
        })
        .attr('transform', function(d) {
            return`rotate (${d.orientation} , ${xScale(d.x)} , ${d.y} )`
        })
        .attr("stroke-width", "3px")
        .attr("stroke", function (d) {
            return d.color
        })
        .attr("fill-opacity","0.3")
        .attr("stroke-opacity","0.2")


        
 }
 
/**
 * this is a function to visualize the parallel midlines.
 */
function drawMidlines( svg, width, height ) {

    console.log('entering function : drawMidlines ')

    // create a scale for the input data 
    const xScale = d3.scaleLinear() 
    .domain([0,1])
    .range([0, width ])
   
    // scale the position of the midlines 
    let positionOfMidline = spaceAtBorder /2;
    for (let i=0; i < numberOfMidlines; i++) {
        
    // draw the midlines one by one
        svg.append('line')
            .style('stroke', 'black')
            .style('stroke-width', 8)
            .attr('x1', positionOfMidline)
            .attr('y1', 0)
            .attr('x2', positionOfMidline)
            .attr('y1', height)

        // this is where we want to draw the line 
        positionOfMidline  += distanceBetweenMidlines 
    }
}