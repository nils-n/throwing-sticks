/**
 * @jest-environment jsdom
 */

const simulation = module.require('../simulation');

// from : Code Institute - "Builidng with Tests - Getting Started"
beforeAll( () => {
    let fs = require('fs')
    let fileContents = fs.readFileSync('index.html', 'utf-8')
    document.open()
    document.write(fileContents)
    document.close()
})  

describe("simulation", () => {

    test("exists", () => {
        expect(simulation).toBeDefined();
    });

    test("contains an empty array of sticks", () => {
        expect('sticks' in simulation).toBe(true);
        expect(simulation.sticks.length).toBe(0)
    })



});