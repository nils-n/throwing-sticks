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

};

module.exports =  Simulation;