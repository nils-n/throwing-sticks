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
        for ( let i=0; i++; i<numberOfRepetitions) {
            model.addNewRandomStick();
            randomPositions.push( model.sticks[i].position)
        }

        // solution from stackoverflow to test an array for uniqueness 
        // https://stackoverflow.com/questions/57001262/jest-expect-only-unique-elements-in-an-array
        const result = randomPositions => Array.isArray(randomPositions) && new Set(randomPositions).size === randomPositions.length; 

        expect(result).toBeTruthy()
    })
    


});