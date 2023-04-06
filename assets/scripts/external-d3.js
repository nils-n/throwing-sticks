console.log(`->OK now let's test some D3.`)

// let's fake some input of some sticks to display. 
const sticks = [ 
    { "position": 0.85, "orientation": 90} ,
    { "position": 0.5, "orientation": 60} ,
    { "position": 0.15, "orientation": 45 } ,
 ];

 console.log(sticks)

 // this will be variable too later but for testing I will hard-code it.
const diagram = document.getElementById('main-diagram')
const height = diagram.clientHeight;
const width = diagram.clientWidth;

const margin = {
    top: 20,
    right: 20,
    bottom: 50,
    left: 20
}


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

const svg = d3.select("#main-diagram")
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.bottom + margin.top)
    .append('g')
    .attr('transform', `translate( ${margin.left} , ${margin.top} )`)

svg.selectAll("test-sticks")
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', function (d) {
        return xScale(d.x)
    })
    .attr('cy', function (d) {
        return d.y
    })
    .attr("r", 40)
    .attr('fill', function (d) {
        return d.color
    })


// make the background transparent 
svg.fillStyle = "#FF0000";

