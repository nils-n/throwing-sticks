import * as d3 from "d3";

export function add(a, b) {
  return d3.sum([a, b]);
}

export function buttonClick() {
    document.getElementById('result').innerText = 'Tadaaaaaaaa';
}