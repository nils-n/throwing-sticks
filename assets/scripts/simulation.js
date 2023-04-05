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

    // the stick touches the line if x * cos(x) < 2. if it touches , color is red, otherwise color is green. 
    assignColours ( ) {
        // loop over sticks and assign color
        for (let stick of this.sticks)
        {
            // to avoid division by zero for angles close to 90 degrees
            if (  Math.abs(stick.orientation - 90) < 0.00001) {
                stick.colour = 'red'
                continue;
            }

            const result = stick.position / Math.cos( this.toRadians( stick.orientation )) ;
            stick.colour = result < 2? "red" : 'green'
        }
    }

    // convert angle to radians because Math.cos expects angles in rad 
    toRadians (angle) {
        return (Math.PI * angle) / 180.0;
    }
};

module.exports =  Simulation;