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
    test('sticks key exists', () => {
        expect('sticks' in diagram).toBe(true);
    })
})

console.log(diagram)
describe('diagram object works properly', () => {
    beforeAll( () => {
        diagram.sticks.push('something')
        diagram.resetSticks()
    })
    test('resetSticks should empty the sticks array', () => {
        expect( diagram.sticks.length).toBe(0);
    })

})
