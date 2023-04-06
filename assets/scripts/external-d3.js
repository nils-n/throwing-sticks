console.log(`->OK now let's test some D3.`)

// let's fake some input of some sticks to display. 
const sticks = [ 
    { "position": 0.85, "orientation": 90} ,
    { "position": 0.5, "orientation": 60} ,
    { "position": 0.15, "orientation": 45 } ,
 ];


// this will be variable too later but for testing I will hard-code it.
const diagram = document.getElementById('main-diagram')
const height = diagram.clientHeight;
const width = diagram.clientWidth;

// now call the functions to draw the elements 
console.log(sticks)
svg = drawEmptyDiagram( width, height )
drawMidlines( svg , width, height )
drawSticks( svg,  sticks )


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
 */

 function drawSticks( svg, sticks ) {
   
       // create a scale for the input data 
       const xScale = d3.scaleLinear() 
       .domain([0,1])
       .range([0, width])

    // now create a circle and move its position 
    const dataset = [{
        x: sticks[0].position,
        y: 100,
        color: "blue"
    }, {
        x: sticks[1].position,
        y: 100,
        color: "lightblue"
    }, {
        x: sticks[2].position,
        y: 100,
        color: "yellowgreen"
    }]

    console.log(dataset)

    svg.selectAll("test-sticks")
        .data(dataset)
        .enter()
        .append('circle')
        .attr('cx', function (d) {
             console.log(` x is ${d.x} but scaled it is ${xScale(d.x)}`)
            return xScale(d.x)
        })
        .attr('cy', function (d) {
            return d.y
        })
        .attr("r", 40)
        .attr('fill', function (d) {
            return d.color
        })
 }
 
/**
 * this is a function to visualize the parallel midlines.
 */
function drawMidlines( svg, width, height ) {

    console.log('entering function : drawMidlines ')

    // create a scale for the input data 
    const xScale = d3.scaleLinear() 
    .domain([0,1])
    .range([0, width])

    // Again i will hard-code this parameter - for now. 
    const numberOfMidlines = 5;

    // takes care that the lines at the border of the SVG are drawn fully
    const spaceAtBorder = 16; 
    let distanceBetweenMidlines = ( width - spaceAtBorder)  / (numberOfMidlines - 1);
   
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