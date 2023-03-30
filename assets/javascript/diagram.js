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

// from here https://busypeoples.github.io/post/testing-d3-with-jasmine/
function barChart() {
    var that = {};

    that.render = function() {
       var svg = d3.select('#main-diagram').append('svg')
             .attr('height', '500')
             .attr('width', '500')
            .append('g')
             .attr("transform", "translate(0, 0)");

    };

    return that;
}

module.exports = {
    diagram, barChart
}