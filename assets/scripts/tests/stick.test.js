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
       const minAllowedPosition = 1.0;
       const maxAllowedPosition = 1.0;
       
       const result =  model.mapPositionIntoFirstSector( randomPosition );

       expect(  result ).toBeLessThanOrEqual( maxAllowedPosition );
       expect(  result ).toBeGreaterThanOrEqual( minAllowedPosition);
    }) 

  
    
        
});