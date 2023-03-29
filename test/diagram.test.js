/**
 * @jest-environment jsdom
 */

const { diagram }  = require('../assets/javascript/diagram')

describe('testing if diagram object works properly', () => {
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