/**
 * @jest-environment jsdom
 */

const Stick  = module.require('../stick');

let model; 

describe( `Class ${Stick.name}`, () => {

    beforeEach( () => {
        const data = { position: "some data", orientation:"some data" ,  length: 'some data' , colour: 'some data' }; 
        model = new Stick(data);
    })

    test("exists and is initialized with empty values", () => {
          expect(model).toBeDefined();
          expect(model.position).toBeDefined()
          expect(model.orientation).toBeDefined()
          expect(model.length).toBeDefined()
          expect(model.colour).toBeDefined()
        });
        
});