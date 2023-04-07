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

const DisplayConfiguration  = module.require('../display');

let model; 

describe( `Class ${DisplayConfiguration.name}`, () => {

    beforeEach( () => {
        model = new DisplayConfiguration();
    })

    test("exists and is initialized with empty values", () => {
          const initialSizeValues = [ 300, 200];
          const initialBGColor = "#FF0000";
          const pixelsAtBorder = 16;
          const numberMidlines = 5;
          const midlineStrokeWidth = 8;

          expect( model ).toBeDefined();
          expect( model.numberSticksOnCanvas).toBe(0);
          expect( model.width ).toBe( initialSizeValues[0] );
          expect( model.height ).toBe( initialSizeValues[1] );
          expect( model.backgroundColor ).toBe( initialBGColor )
          expect( model.numberOfMidlines ).toBe( numberMidlines )
          expect( model.midlineStrokeWidth ).toBe( midlineStrokeWidth )
          
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

    test('correct displayed stick length on the screen', () => {
        model.numberOfMidlines = 2;
        const widths = [ 100, 200] ;
        const expectedStickLengths = [ 50, 100];
        
        const calculatedStickLengths = []
        for (let i in expectedStickLengths) {
            model.width = widths[i]
            model.calculateStickLengthOnScreen();
            calculatedStickLengths.push( model.stickLengthOnScreen )
        }

        for (let i in expectedStickLengths){
            expect( calculatedStickLengths[i] ).toBe( expectedStickLengths[i] )
        }
    });


        
});