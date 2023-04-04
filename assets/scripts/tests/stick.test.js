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

    test("exists ", () => {
          expect(model).toBeDefined();
        });
        
});