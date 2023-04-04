/**
 * @jest-environment jsdom
 */

const Simulation  = module.require('../simulation');
const Stick  = module.require('../stick');

let model; 

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
    })

    test("exists and has empty array of sticks", () => {
          expect(model.sticks).toBeDefined();
          expect(model.sticks.length).toBe(0);
        });
    
    test('can add a new stick', () => {
        const data = new Stick({ position: "some data", orientation:"some data" ,  length: 'some data' , colour: 'some data' }); 

        model.addNewStick(data);

    })

});