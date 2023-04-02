import { add , buttonClick } from '../src/sum.js';
import assert from 'assert';
import {select} from "d3-selection";
import {JSDOM} from "jsdom";
import { readFileSync } from 'fs';

describe('Loading of functions from d3 library', function () {

    // create a fake html that can be tested with mocha
   before(function () {
    const html = readFileSync("./index.html");
    const dom = new JSDOM(html);
    global.window = dom.window;
    global.document = dom.window.document;
   });

  describe('testing d3.sum() ', function () {
    it('should return 42', function () {
      assert.equal(add(20, 22), 42);
    });
    it('button click updates the html document ', function () {
        buttonClick();
        assert.equal(document.getElementById('result').innerText, 'Tadaaaaaaaa')
    });
  });
});





