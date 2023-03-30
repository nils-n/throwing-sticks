/**
 * @jest-environment jsdom
 */

const visual = require('../assets/javascript/diagram');

beforeAll(() => {
  const d3 = require('d3');
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

describe('diagram object works properly', () => {
  beforeAll(() => {
    visual.diagram.initDiagram()
    visual.diagram.sticks.push('something')
    visual.diagram.resetSticks()
  })
  test('resetSticks should empty the sticks array', () => {
    expect(visual.diagram.sticks.length).toBe(0);
  })
  test('button click of "Reset" Button should clear stick array', () => {
    visual.diagram.sticks.push('something');
    resetButton = document.getElementById('hero-reset').click();
    expect(visual.diagram.sticks.length).toEqual(0);
  })
  test('stick array should be non-zero after "Throw" button press', () => {
    throwButton = document.getElementById('hero-throw').click();
    expect(visual.diagram.sticks.length).toEqual(1);
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
  // test("d3 should exist", () => {
  //   expect(d3).toBeDefined();
  // });
  test("d3 should create an svg element", () => {
    const div = document.getElementById('main-diagram')
    expect(div.hasChildNodes()).toBe(true);
  });
})

// taken from  https://busypeoples.github.io/post/testing-d3-with-jasmine/
describe('d3 should draw an svg in the main diagram div ', function () {
const d3 = require('d3');
var c;
beforeEach( () => {
  c = visual.animateExample();
  c.render();
});
afterEach(function () {
  const d3 = require('d3');
  d3.selectAll('svg').remove();
});
test('an svg element should exist', () => {
  expect(d3.select('svg')).not.toBeNull();
})
test('the svg element should have a width of 300', () => {
  expect(d3.select('svg').attr('width')).toBe('300');
})
test('the svg element should have a height of 200', () => {
  expect(d3.select('svg').attr('height')).toBe('200');
})

});