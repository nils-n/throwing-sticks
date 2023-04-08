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
        const minAllowedPosition = 0.0;
        const maxAllowedPosition = 1.0;
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

    xtest('maps a position from other sectors correctly into the first sector', () => {
       // random stick in the 4th sector 
       const randomPosition = 4.5
  
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

  
    
        
});