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
        const expectedDistances = [ 100, 200 ];
        const widths = [ 100, 200] ;
        model.numberOfMidlines = 2;

        const calculatedDistances = []
        for (let i in expectedDistances) {
            model.width = widths[i]
            model.calculateDistanceBetweenMidLines();
            calculatedDistances.push( model.distanceBetweenMidlines )
        }

        for (let i in expectedDistances) {
            expect( calculatedDistances[i] ).toBe( expectedDistances[i] );
        }
    });


        
});