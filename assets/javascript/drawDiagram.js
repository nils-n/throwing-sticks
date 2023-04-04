import { doSomething } from "./index.js";

doSomething();

const svg = d3.select("#main-diagram")
    .append('svg')
    .attr('width', 200)
    .attr('height',300)
