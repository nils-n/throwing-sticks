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
        this.numberSticksOnCanvas = 0;
        this.margin = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 4,
        }
        this.backgroundColor = "#FF0000";
        this.width = 300;  //update with clientWidth in the browser
        this.height = 200;  //update with clientHeight in the browser
        this.numberOfMidlines = 5; 
        this.spaceAtBorder = 8; 
        this.midlineStrokeWidth = 8;
    }

    // also have a copy constructor 
    static from(other) {
        return new DisplayConfiguration(
            other.numberSticksOnCanvas,
            other.margin,
            other.backgroundColor, 
            other.width, 
            other.height, 
            other.numberOfMidlines, 
            other.spaceAtBorder,
            other.midlineStrokeWidth
        ); }

    // calculate how much space needed for display
    calculateDistanceBetweenMidLines() {
        this.distanceBetweenMidlines =  this.width  / ( this.numberOfMidlines - 1);
    }

    // cacluate the displayed lenght of a stick 
    calculateStickLengthOnScreen () {
        this.calculateDistanceBetweenMidLines()
        this.stickLengthOnScreen = ( this.distanceBetweenMidlines ) / 2;
    } 

};

module.exports =  DisplayConfiguration 