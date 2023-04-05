/**
 * @jest-environment jsdom
 */

/**
 * All tests are laid out in the form 
 * 
 *  A rrange 
 *  A ct 
 *  A ssert 
 * 
 */

const Simulation  = module.require('../simulation');
const Stick  = module.require('../stick');

let model; 
let data;

// from : Code Institute - "Builidng with Tests - Getting Started"
beforeAll( () => {
    let fs = require('fs')
    let fileContents = fs.readFileSync('index.html', 'utf-8')
    document.open()
    document.write(fileContents)
    document.close() 
})  

/** 
 * These test assert the properties and methods of the Simulation Class 
 */
describe( `Class ${Simulation.name}`, () => {

    beforeEach( () => {
        model = new Simulation();
        data = new Stick({ position: "some data", orientation:"some data" ,  length: 'some data' , colour: 'some data' }); 
    })

    test("exists and has empty array of sticks", () => {
          expect(model.sticks).toBeDefined();
          expect(model.sticks.length).toBe(0);
    });
    
    test('can add a new stick given data', () => {
        model.addNewStick(data);

        expect(model.sticks.length).toBeGreaterThan(0);
    })

    test('can remove all sticks', () => {
        model.addNewStick(data);

        model.removeAllSticks();

        expect(model.sticks.length).toBe(0);
    })

    test('can add new stick with position between 0 and 1', () => {
        model.addNewRandomStick();

        const result =  model.sticks[0].position

        expect( result ).toBeGreaterThan(0);
        expect( result ).toBeLessThan(1);
    })

    test('new stick has orientation between 0 and 180 degrees', () => {
        model.addNewRandomStick();

        const result = model.sticks[0].orientation

        expect( result ).toBeGreaterThan(0)
        expect( result ).toBeLessThan(180)    
    })

    // i'm not so sure how to test for randomness. I'll just add 10 sticks and confirm that all locations are different 
    test('new position is random', () => {
        const numberOfRepetitions = 10;
        const randomPositions = [];
        for ( let i=0; i<numberOfRepetitions; i++ ) {
            model.addNewRandomStick();
            randomPositions.push( model.sticks[i].position)
        }

        // solution from stackoverflow to test an array for uniqueness 
        // https://stackoverflow.com/questions/57001262/jest-expect-only-unique-elements-in-an-array
        const result = new Set(randomPositions).size === randomPositions.length; 

        expect(result).toBeTruthy()
    })
    
    test('new orientation is random', () => {
        const numberOfRepetitions = 10;
        const randomOrientations= [];
        for ( let i=0;  i<numberOfRepetitions; i++ ) {
            model.addNewRandomStick();
            randomOrientations.push( model.sticks[i].orientation)
        }

        // solution from stackoverflow to test an array for uniqueness 
        // https://stackoverflow.com/questions/57001262/jest-expect-only-unique-elements-in-an-array
        const result = new Set(randomOrientations).size === randomOrientations.length; 

        expect(result).toBeTruthy()
    })

    // in order to work with Javascript.Math we need to convert angles to radians
    // note that this is **not** introducing a bias to estimate Pi with the simulation - it's just how Javascript.Math deals with angles.
    test('correctly convert degrees to radians', () => {
        const testValues = [ 180, 90, 0 ]
        const expectedResults = [ Math.PI , Math.PI/2, 0, ]

        const results = []
        for (let testValue of testValues) {
            results.push( model.toRadians( testValue )) 
        }

        // using array destructuring for a nicer for loop
        //https://medium.com/@francois.barrailla/javascript-iterate-over-array-values-and-indexes-using-a-for-of-loop-106a58972b24
        for (const [index, result] of results.entries()) { 
            expect( result ).toBe ( expectedResults[index] )
          }

    })

    xtest('sticks that touch the midlines should be red', () => {
        model.addNewStick( {postion: 0.5, orientation:90})
        model.assignColours();

        const result = model.sticks[0].colour;

        expect(result).toBe('red')
    })




    



});