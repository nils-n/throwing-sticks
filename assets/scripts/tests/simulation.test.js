/**
 * @jest-environment jsdom
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

describe( `Class ${Simulation.name}`, () => {

    beforeEach( () => {
        model = new Simulation();
        data = new Stick({ position: "some data", orientation:"some data" ,  length: 'some data' , colour: 'some data' }); 
    })

    test("exists and has empty array of sticks", () => {
          expect(model.sticks).toBeDefined();
          expect(model.sticks.length).toBe(0);
        });
    
    test('can add a new stick', () => {
        model.addNewStick(data);

        expect(model.sticks.length).toBeGreaterThan(0);
    })

    test('can remove all sticks', () => {
        model.addNewStick(data);

        model.removeAllSticks();

        expect(model.sticks.length).toBe(0);
    })

});