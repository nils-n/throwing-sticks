/**
 * This class organizes the input for d3.js 
 * // based on https://d3-graph-gallery.com/intro_d3js.html
 */
class DisplayConfiguration {

    numberSticksOnCanvas;
    width;
    height;
    margin; 
    backgroundColor;

    constructor() {
        console.log('entering constructor of Display')
        this.numberSticksOnCanvas = 0;
        this.margin = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        }
        this.backgroundColor = "#FF0000";

        // to make it responsive, update with clientWidth and clientHeight in the browser
        this.width = 300;
        this.height = 200;
    }
  

};

module.exports =  DisplayConfiguration 