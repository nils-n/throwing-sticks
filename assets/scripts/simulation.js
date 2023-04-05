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
    // the stick has a random position between 0 and  1
    addNewRandomStick(  ) {

        // create a random position 
        const randomPosition =  Math.random() ;

        const data = { position:randomPosition }
        this.sticks.push( new Stick( data ) )
    }

};

module.exports =  Simulation;