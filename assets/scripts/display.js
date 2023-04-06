
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

        d3
            .select(".target")  // select the elements that have the class 'target'
            .style("stroke-width", 8) // change their style: stroke width is not equal to 8 pixels
    }

};

module.exports =  Display;