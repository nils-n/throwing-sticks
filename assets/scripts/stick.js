
/**
 * This class describes a single stick with all relevant properties for calculating Pi
 */
class Stick {
    position;
    orientation;
    length; 
    colour;
    sector;
    constructor( data ) {
        this.position = data.position;
        this.orientation = data.orientation;
        this.length = data.length;
        this.colour = data.colour;
        this.sector = 0;
    }
};

module.exports =  Stick;