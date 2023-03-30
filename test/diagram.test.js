/**
 * @jest-environment jsdom
 */
const d3 = require('d3');

const { diagram, barChart }  = require('../assets/javascript/diagram')


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

describe('diagram object works properly', () => {
    beforeAll( () => {
        diagram.initDiagram()
        diagram.sticks.push('something')
        diagram.resetSticks()
    })
    test('resetSticks should empty the sticks array', () => {
        expect( diagram.sticks.length).toBe(0);
    })
    test('button click of "Reset" Button should clear stick array', () => {
        diagram.sticks.push('something');
        resetButton = document.getElementById('hero-reset').click();
        expect(diagram.sticks.length).toEqual(0);
    })
    test('stick array should be non-zero after "Throw" button press', () => {
        throwButton = document.getElementById('hero-throw').click();
        expect(diagram.sticks.length).toEqual(1);
    })
})

describe("test basic function of d3 library", () => {
  beforeAll( () => {
    const svg = d3.select("#main-diagram")
    .append('svg')
    .attr('width', 500)
    .attr('height',300)
  })
  test("d3 should exist", () => {
    expect(d3).toBeDefined();
  });
  test("d3 should create an svg element", () => {
    const div = document.getElementById('main-diagram')
    expect(div.hasChildNodes()).toBe(true);
  });


  describe('Test D3.js with jasmine ', function() {
    var c;
  
    beforeEach(function() {
      c = barChart();
      c.render();
    });
  
    afterEach(function() {
      d3.selectAll('svg').remove();
    });
  
    describe('the svg' ,function() {
      it('should be created', function() {
          expect(getSvg()).not.toBeNull();
      });
  
      it('should have the correct height', function() {
        expect(getSvg().attr('width')).toBe('500');
      });
  
      it('should have the correct width', function() {
        expect(getSvg().attr('width')).toBe('500');
      });
    });
  
    function getSvg() {
      return d3.select('svg');
    }
  
  });





});
