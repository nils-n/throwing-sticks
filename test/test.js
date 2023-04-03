import { add, buttonClick } from '../src/sum.js';
import assert from 'assert';
import { select } from "d3-selection";
import { JSDOM } from "jsdom";
import { readFileSync } from 'fs';

describe('Capability tests of the main diagram', function () {

  // create a fake html that can be tested with mocha
  before(function () {
    const html = readFileSync("./index.html");
    const dom = new JSDOM(html);
    global.window = dom.window;
    global.document = dom.window.document;
  });

  // general properties
  describe('general properties', function () {
    it('exists in the DOM', function () {

      // TO DO 
    })
  })

  // possible user interactions 
  describe('user interactions', function () {
    it('button click updates the diagram', function () {

      buttonClick();

      assert.equal(document.getElementById('result').innerText, 'Tadaaaaaaaa')
    });

    it('moving the slider increases sticks per throw', function () {

      // TO DO
    });

  });

  // options to draw things on the canvas 
  describe('drawing objects', function () {

    it('d3.sum can be invoked for addition operation', function () {

      const randomNumbers = [20, 22]
      const actualResult = 42

      assert.equal(add(randomNumbers[0], randomNumbers[1]), actualResult);
      assert.equal(add(randomNumbers[1], randomNumbers[0]), actualResult);

    });
  })



});