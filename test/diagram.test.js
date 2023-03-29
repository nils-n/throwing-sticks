/**
 * @jest-environment jsdom
 */

const { diagram, resetStickCounters }  = require('../assets/javascript/diagram')

beforeAll( () => {
    let fs = require('fs')
    let fileContents = fs.readFileSync('index.html', 'utf-8')
    document.open()
    document.write(fileContents)
    document.close()
})


describe('diagram objects has correct keys', () => {
    test('stickCountTotal key exists', () => {
        expect( 'stickCountTotal' in diagram).toBe(true)
    })
    test('stickCountTouching key exists', () => {
        expect( 'stickCountTouching' in diagram).toBe(true)
    })
    test('stickCountNotTouching key exists', () => {
        expect( 'stickCountNotTouching' in diagram).toBe(true)
    })
})
console.log(diagram)
describe('diagram object works properly', () => {
    beforeAll( () => {
        diagram.stickCountTotal = 100;
        resetStickCounters()
    })
    test('resetStickCounters sets stickCountTotal to zero', () => {
        expect( diagram.stickCountTotal).toBe(0);
    })

})
