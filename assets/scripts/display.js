/**
 * This class organizes functions for data visualization in the browser
 */
class Display {
    numberSticksOnCanvas;
    constructor() {
        console.log('entering constructor of Display')
        this.numberSticksOnCanvas = 0;
        this.drawSomething();
    }

    // based on https://d3-graph-gallery.com/intro_d3js.html
    drawSomething() {
        console.log('entering function : drawSomething. This should now modify the svg element')

        var svg = d3.select("#dataviz_area")
        height=200 
        width=450

        // Create data
        var data = [ {x:10, y:100}, {x:40, y:100}, {x:80, y:100} ]

        // X scale and Axis
        var x = d3.scaleLinear()
            .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
            .range([0, width]);       // This is the corresponding value I want in Pixel
        svg
        .append('g')
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

        // X scale and Axis
        var y = d3.scaleLinear()
            .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
            .range([height, 0]);       // This is the corresponding value I want in Pixel
        svg
        .append('g')
        .call(d3.axisLeft(y));

        // Add 3 dots for 0, 50 and 100%
        svg
        .selectAll("whatever")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", function(d){ return x(d.x) })
            .attr("cy", function(d){ return y(d.y) })
            .attr("r", 7)
    }

};

module.exports = Display;