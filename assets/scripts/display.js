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
    numberOfMidlines;
    spaceAtBorder;
    distanceBetweenMidlines;
    midlineStrokeWidth;
    stickLengthOnScreen;

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
        this.width = 300;  //update with clientWidth in the browser
        this.height = 200;  //update with clientHeight in the browser
        this.numberOfMidlines = 5; 
    }

    // calculate how much space needed for display
    calculateDistanceBetweenMidLines() {
        this.distanceBetweenMidlines =  this.width  / ( this.numberOfMidlines - 1);
    }
  

};

module.exports =  DisplayConfiguration 