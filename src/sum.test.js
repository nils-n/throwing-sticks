/**
 * @jest-environment jsdom
 */

import { add, buttonClick } from './sum.js';

beforeAll(() => {
    let fs = require('fs')
    let fileContents = fs.readFileSync('index.html', 'utf-8')
    document.open()
    document.write(fileContents)
    document.close()
})

describe('sum.js', function () {
    test('add two numbers', function () {
        expect(add(1, 2)).toBe(3);
    })
    test('update the html document', () => {
        buttonClick();
        expect(document.getElementById('result').innerText).toEqual('Tadaaaaaaaa')
    })

})