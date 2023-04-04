export function doSomething() {
    console.log(`Well, I am doin' someting, ain't I?`)
    return true;
}

export class SomeClass {
    invoke() {
        return true;
    }
}

/**
 * This class will responsible for the input to d3.
 *
 * Unfortunately i cannot test front-end properties d3 in jest directly - seems like there are other tools for doing that. 
 * https://stackoverflow.com/questions/65499743/writing-tests-with-jest-for-vanilla-js
 */
export class Diagram {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    // Method
    calcArea() {
        return this.height * this.width;
    }
}

//  https://stackoverflow.com/questions/42595427/jest-testing-of-simple-vanilla-javascript-cannot-read-property-addeventlisten
// the problem was that the entire DOM has not loaded yet
document.addEventListener('DOMContentLoaded', function () {
    console.log('Not part of module.exports but still appearing in terminal, why?');
    var button = document.getElementById('button');
    button.addEventListener('click', function (e) {
        console.log('button was clicked');
    });
});