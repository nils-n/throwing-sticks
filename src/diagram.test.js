/**
 * @jest-environment jsdom
 */

import { diagram } from './diagram.js';

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