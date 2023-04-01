/**
 * @jest-environment jsdom
 */

import { diagram , getMaxValue } from './diagram.js';

beforeAll(() => {
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

describe("test if d3 can be loaded in node ", () => {
  test(" should return maximum", () => {
    const data = [1, 2, 3, 4, 5];
    expect(getMaxValue(data)).toEqual(5);
  });
});