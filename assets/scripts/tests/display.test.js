/**
 * @jest-environment jsdom
 */

const DisplayConfiguration  = module.require('../display');

let model; 

describe( `Class ${DisplayConfiguration.name}`, () => {

    beforeEach( () => {
        model = new DisplayConfiguration();
    })

    test("exists and is initialized with empty values", () => {
          expect(model).toBeDefined();
          expect(model.numberSticksOnCanvas).toBe(0);
        });
        
});