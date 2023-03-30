const d3 = require('d3');

/**
 * This object has a single responsibility to draw whatever it finds in the database. 
 */
const diagram = {
    sticks: [],
    resetSticks: function () {
        this.sticks = [];
    },
    initDiagram: function () {
        document.getElementById('hero-reset').addEventListener('click', () => {
            console.log('diagram.js : reset button has been clicked!)')
            this.resetSticks();
        })
        document.getElementById('hero-throw').addEventListener('click', () => {
            console.log('diagram.js : throw button has been clicked!)')
            this.sticks.push('at least something')
        })
    },
}

// based on https://busypeoples.github.io/post/testing-d3-with-jasmine/
function animateExample() {

    var that = {};

    that.render = function() {
        const margin = {
            top: 20,
            right: 20,
            bottom: 50,
            left: 20
        }
        const height = 200;
        const width = 300;

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
    };
    
    return that;
}

module.exports = {
    diagram, animateExample
}