const Stick = module.require('./stick');

/**
 * This class contains the calculation in the background and keeps track of the sticks
 */
class Simulation {
    
    sticks;
    stickCounter ;
    estimatedValueOfPi;

    numberGreenSticks;  
    
    constructor() {
        this.sticks = [];
        this.stickCounter = { 'red': 0, 'green': 0, 'total': 0};
        this.estimatedValueOfPi = 42;
    }

    // adds a new stick
    addNewStick( data ){
        this.sticks.push( new Stick( data ) )
        this.stickCounter['total'] += 1;

        // if color has been defined, move to the next
        if (data.colour) {
            this.stickCounter[data.colour] +=1;
        }
    }

    //clear stick array
    removeAllSticks() {
        this.sticks = [];
        this.stickCounter = { 'red': 0, 'green': 0, 'total': 0};
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

        this.addNewStick( data )
    }

    // only for display : assign a random sector to the sticks
    // otherwise, all sticks would be placed between the first and second midline on the screen 
    assignRandomSectorOnDisplay( numberOfSectors ) {
        for (let stick of this.sticks){
            if (!stick.drawnOnScreen){
                stick.sector =  Math.floor( numberOfSectors * Math.random() );
                stick.drawnOnScreen = true;
            }
        }
    } 

    // assigns a color to the stick wheter it touches the midlines.
    assignColours ( ) {
        // loop over sticks and assign color
        for (let stick of this.sticks)
        {
            // if color has been defined, move to the next
            if (stick.colour) {
                continue;
            }

            // the stick will touch the line under this condition for the orientation 
            const stickTouchesMidline =  Math.abs( Math.cos( this.toRadians( stick.orientation ) ))  > stick.position;
            //qconsole.log(` ->  angle is ${stick.orientation},  position is ${stick.position} -> touches midline? ${stickTouchesMidline}` )

            // set the color to red if the stick touches - green otherwise 
            stick.colour = stickTouchesMidline ? "red" : 'green'

            // update the stick count too
            this.stickCounter[stick.colour] += 1;
        }
    }

    // convert angle to radians because Math.cos expects angles in rad 
    toRadians (angle) {
        return (Math.PI * angle) / 180.0;
    }

    estimatePi () {

        console.log(` -> red sticks ${this.stickCounter['red']} - green sticks ${this.stickCounter['green']}  - total #  ${this.stickCounter['total']}  `)

        // ensure that this.stickCounter['red'] is not zero 
        if ( !this.stickCounter['red'] ) {
            return 0;
        }
        const result =  2 * ( this.stickCounter['total']) / this.stickCounter['red']

        this.estimatedValueOfPi =  result ;

        console.log(` -> estimated value of Pi  ${result} `)

    }
};

module.exports =  Simulation;