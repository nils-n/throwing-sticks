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
          const initialSizeValues = [ 300, 200];
          const initialBGColor = "#FF0000";

          expect( model ).toBeDefined();
          expect( model.numberSticksOnCanvas).toBe(0);
          expect( model.width ).toBe( initialSizeValues[0] );
          expect( model.height ).toBe( initialSizeValues[1] );
          expect( model.backgroundColor ).toBe(initialBGColor)
          expect( model.numberOfMidlines ).toBe(5)
        });

    test("distance between midlines calculated correctly", () => {
        const expectedDistance = 100;
        model.numberOfMidlines = 2;
        model.width = 100;

        model.calculateDistanceBetweenMidLines()

        expect(model.distanceBetweenMidlines).toBe( expectedDistance );
    });


        
});