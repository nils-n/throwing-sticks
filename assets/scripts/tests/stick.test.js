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
        });
        
});