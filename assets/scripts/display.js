
/**
 * This class organizes functions for data visualization in the browser
 */
class Display {
    numberSticksOnCanvas;
    constructor( ) {
        console.log('entering constructor of Display')
        this.numberSticksOnCanvas = 0;
        this.drawSomething();
    }

    // based on https://d3-graph-gallery.com/intro_d3js.html
    drawSomething() {
        console.log('entering function : drawSomething. This should now modify the svg element')

        var svg = d3.select("#dataviz_area")
        svg.append("circle")
          .attr("cx", 2).attr("cy", 2).attr("r", 40).style("fill", "blue");
        svg.append("circle")
          .attr("cx", 140).attr("cy", 70).attr("r", 40).style("fill", "red");
        svg.append("circle")
          .attr("cx", 300).attr("cy", 100).attr("r", 40).style("fill", "green");
    }

};

module.exports =  Display;