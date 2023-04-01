/**
 * @jest-environment jsdom
 */

const visual = require('../assets/javascript/diagram');

beforeAll(() => {
  let fs = require('fs')
  let fileContents = fs.readFileSync('index.html', 'utf-8')
  document.open()
  document.write(fileContents)
  document.close()
})

describe('test if you can call functions', () => {
  test( 'should return a sting', () => {
    expect(typeof visual.saySomething()).toBe('string');
  })
  test( 'string should say Hello World', () => {
    expect(visual.saySomething()).toBe('Something');
  })
})

describe('diagram objects has correct keys', () => {
  test('sticks key exists', () => {
    expect('sticks' in visual.diagram).toBe(true);
  })
})