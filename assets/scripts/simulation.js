const Stick = module.require('./stick');

/**
 * This class contains the calculation in the background and keeps track of the sticks
 */
class Simulation {
    
    sticks;
    
    constructor() {
        this.sticks = [];
    }

    // adds a new stick
    addNewStick( data ){
        this.sticks.push( new Stick( data ) )
    }

    //clear stick array
    removeAllSticks() {
        this.sticks = [];
    }

    //add a stick with a random location and orientation
    // the stick has a position between 0 and  1
    addNewRandomStick(  ) {

        // to ensure angle is between 0 and 180
        const maxAngle = 180;

        // create a random position 
        const randomPosition =  Math.random() ;
        const randomOrientation = maxAngle * Math.random();

        const data = { position:randomPosition, orientation:randomOrientation}
        this.sticks.push( new Stick( data ) )
    }

};

module.exports =  Simulation;