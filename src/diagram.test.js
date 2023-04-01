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


describe("test basic function of d3 library", () => {
  beforeAll(() => {
    const d3 = require('d3');
    const svg = d3.select("#main-diagram")
      .append('svg')
      .attr('width', 500)
      .attr('height', 300)
  })
  test("d3 should return maximum", () => {
    const data = [1, 2, 3, 4, 5];
    expect(getMaxValue(data)).toEqual(5);
  });
  test("d3 should create an svg element", () => {
    const div = document.getElementById('main-diagram')
    expect(div.hasChildNodes()).toBe(true);
  });
})

