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

    const d3 = require('d3');
    var that = {};
    that.render = function () {
        const height = 200;
        const width = 300;
        const svg = d3.select("#main-diagram")
            .append('svg')
            .attr('width', width)
            .attr('height', height)
        svg.fillStyle = '#2#cc9616';
    };

    return that;
}

// write something that can be tested in jest and also be displayed in the browser 
function saySomething() {
    return 'Something';
}

module.exports = {
    animateExample, 
    diagram,
    saySomething,
};

