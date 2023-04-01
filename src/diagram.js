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