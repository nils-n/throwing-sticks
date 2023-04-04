/**
 * @jest-environment jsdom
 */

const Simulation  = module.require('../simulation');

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

});