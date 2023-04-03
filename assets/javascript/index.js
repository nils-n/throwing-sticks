export function doSomething () {
    console.log(`Well, I am doin' someting, ain't I?`)
    return true;
}

export class SomeClass {
    invoke() {
        return true;
    }
}

//  https://stackoverflow.com/questions/42595427/jest-testing-of-simple-vanilla-javascript-cannot-read-property-addeventlisten
// the problem was that the entire DOM has not loaded yet
document.addEventListener('DOMContentLoaded', function () {
    console.log('Not part of module.exports but still appearing in terminal, why?');
    var button = document.getElementById('button');
    button.addEventListener('click', function(e) {
      console.log('button was clicked');
    });
});