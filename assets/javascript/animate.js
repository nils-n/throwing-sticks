console.log('animate.js : script is loaded')

const margin = {
    top: 20,
    right: 20,
    bottom: 50,
    left: 20
}
const diagram = document.getElementById('main-diagram')
const height = diagram.clientHeight;
const width = diagram.clientWidth;

console.log('animate.js :   height  ' + height)
console.log('animate.js :   width   ' + width)


// now create a circle and move its position 
const circles = [{
    x: 2,
    y: 2,
    color: "blue"
}, {
    x: 70,
    y: 40,
    color: "lightblue"
}, {
    x: 200,
    y: 140,
    color: "yellowgreen"
}]

const svg = d3.select("#main-diagram")
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.bottom + margin.top)
    .append('g')
    .attr('transform', `translate( ${margin.left} , ${margin.top} )`)

svg.selectAll("mycircles")
    .data(circles)
    .enter()
    .append('circle')
    .attr('cx', function (d) {
        return d.x
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


function throwSticks() {
    console.log('enter function : throwSticks')
    d3.select('#main-diagram')
        .selectAll('circle')
        .transition()
        .delay(100)
        .duration(2000)
        .attr('cx', 100)
}

function resetSticks() {
    console.log('enter function : resetSticks() (not implemented yet - for this we need a database of sticks)')
    
}