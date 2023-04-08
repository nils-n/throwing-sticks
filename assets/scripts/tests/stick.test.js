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

const Stick  = module.require('../stick');

let model; 

describe( `Class ${Stick.name}`, () => {

    beforeEach( () => {
        const data = { position: '', orientation:'' ,  length: '' , colour: '' }; 
        model = new Stick(data);
    })

    test("exists and is initialized with empty values", () => {
          expect(model).toBeDefined();
          expect(model.position).toBeDefined()
          expect(model.orientation).toBeDefined()
          expect(model.length).toBeDefined()
          expect(model.colour).toBeDefined()
          expect(model.sector).toBeNull()
          expect(model.verticalOffsetOnScreen).toBeNull()
        });

    test('maps a position from other sectors correctly into the first sector', () => {
       // random stick in the 4th sector 
       const randomPosition = 4.5
       const minAllowedPosition = 0.0;
       const maxAllowedPosition = 1.0;

       const result =  model.mapPositionIntoFirstSector( randomPosition );

       expect(  result ).toBeLessThanOrEqual( maxAllowedPosition );
       expect(  result ).toBeGreaterThanOrEqual( minAllowedPosition);
    }) 

    test('handles correctly the case that mapped number is between 0 and 1', () => {
        // stick in the 4th sector that is mapped betweeon 0 and 1
        const inputPosition = 4.5;
        const mappedPosition = 0.5;

        const result =  model.mapPositionIntoFirstSector( inputPosition );

        expect(  result ).toBe( mappedPosition );
    })

    test('handles correctly the case that mapped number is between 1 and 2', () => {
        // stick in the 4th sector that is mapped betweeon 1 and 2
        // note : the mapping method should mirror any number between 1 and 2 into the mirrored interval between 0 and 1
        // note : this needs to be done because the simulation operates in the interval 0 and 1, but the visualization allows larger numbers.
        const randomInputPositions = [ 5.5, 5.6, 5.7, 5.8, 5.9, 6.0] ;
        const correctlyMappedPositions = [ 0.5, 0.4, 0.3, 0.2, 0.1, 0.0 ] ;

        const mappedPositions = []
        for (const inputPosition of randomInputPositions) {
            mappedPositions.push( model.mapPositionIntoFirstSector( inputPosition ) )
        }

        for (const i in correctlyMappedPositions){
            expect( mappedPositions[i] ).toBeCloseTo( correctlyMappedPositions[i] )
        }
    })

    
        
});