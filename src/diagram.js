import * as d3 from 'd3/dist/d3.min.js';

export const diagram = {
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

export function getMaxValue(data) {
    const maxValue = d3.max(data);
    return maxValue;
  }

// based on https://busypeoples.github.io/post/testing-d3-with-jasmine/
export function animateExample() {

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