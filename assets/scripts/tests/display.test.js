/**
 * @jest-environment jsdom
 */

const Display  = module.require('../display');

let model; 

describe( `Class ${Display.name}`, () => {

    beforeEach( () => {
        model = new Display();
    })

    test("exists and is initialized with empty values", () => {
          expect(model).toBeDefined();
          expect(model.numberSticksOnCanvas).toBe(0);
        });
        
});