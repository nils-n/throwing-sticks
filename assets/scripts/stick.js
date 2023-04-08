
/**
 * This class describes a single stick with all relevant properties for calculating Pi
 */
class Stick {
    position;
    orientation;
    length; 
    colour;
    sector;
    verticalOffsetOnScreen;
    constructor( data ) {
        this.position = data.position;
        this.orientation = data.orientation;
        this.length = data.length;
        this.colour = data.colour;
        this.sector = null;
        this.verticalOffsetOnScreen = null; 
        this.drawnOnScreen = false;
        this.verticallyWiggledOnScreen = false;
    }

    /**
     *  This functions maps a random position back to interval [0,2] of the first sector between midlines.
     * 
     * this may seem weird but in the simulation '1' means half the distance between midlines.
     * If the mapped number is is between 0  and 1, we are checking the left all good.
     * If the number is between 1 and 2, we need to mirror it to the interval between 0 and 1 and check there
     */
    mapPositionIntoFirstSector ( position  ) {
        const maxNumberInFirstSector = 2;
        return position % maxNumberInFirstSector;
    }

     


};

module.exports =  Stick;