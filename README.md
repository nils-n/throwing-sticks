# A short story about a magic number and throwing sticks 

The number $\pi$ is widely used in probably each and every modern technological device. Yet, its understanding is somehow limited - like a car, we can use it without knowing exactly what it does. This website is an attempt to teach the value of this number in an interactive and fun way.

Link to the live page : [To do]


![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![GitHub contributors](https://img.shields.io/github/contributors/nils-n/throwing-sticks)
![GitHub last commit](https://img.shields.io/github/last-commit/nils-n/throwing-sticks)
![GitHub language count](https://img.shields.io/github/languages/count/nils-n/throwing-sticks)
![GitHub repo file count](https://img.shields.io/github/directory-file-count/nils-n/throwing-sticks)
![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fnils-n.github.io%2Fasd%2F)

## Table of Contents

----- 

## User Experience (UX)

### User Stories 

As a first-time user...
<ol>
    <li> I want a to learn about &pi; by exploring data interactively so that my learning experience is fun.</li>
    <li> I have never heard about &pi; and i am curious to learn what makes this number special. </li>
    <li> I am aware of the value of &pi;  but i never liked the dull, academic style how it is taught on other websites. Visiting this website, i want to refresh my memory in a fun way what this number was all about. </li>
    <li> I want a friendly, entertaining website so that i can show it to my friends or children and motivate them to learn more about math. </li>
</ol>

### Website Aims

<ul>
    <li> Motive a change to the dull academic-style websites by using modern web technologies </li>
    <li> Advertise the value of &pi; in a fun, interactive and exploratory way </li>
    <li> Promote the art of coding by showcasing modern browser technologies </li>
    <li> Provide accurate and correct information </li>
</ul>

### How these needs are addressed

- All possible user scenarios and potential needs were identified and documented. 
- The user needs to feel instantly a positive emotion and should know instantly what to expect from this website. 
- THIS IS A WIP 

### Opportunities 

| Description                            | Impact | Feasibility | 
|----------------------------------------|--------|-------------|
| Promote Math and the value of &pi;     | 5      | 5           | 
| Entertain the users                    | 5      | 5           | 
| Animate the calulation of Pi using thrown sticks in JS  | 5      | 5           | 
| Animate the explanations using JS      | 5      | 5          | 
| ~~Do large-scale simulation (> 10e6 sticks)~~  | 2   | 1    | 
| **Sum**                          | **20**   | **20**     | 

### Feature selection

- The sum of Impact/Feasibility is balanced after discarding the entry "Do large-scale simulation (> 10e6 sticks)".
-  This had to be discarded because it is currently not feasible without using dedicated simulation software (i.e. [Processing](https://processing.org/)) or running the simulation on a backend server - which is beyond the scope of this project. 
- I figured that for educational purposes, an animation of ~1000 sticks the simulation can be handled by most browsers using d3.js and would still lead to a sufficient approximation of &pi; .



----- 

## Design

### Color Scheme

### Typography

### Imagery 

### Wireframes

----- 

## Features

### General Features 

### Main Page 

#### 404 Page 

----- 

### Future Implementations

- Estimate $\pi$ using similar heuristical methods ( see example  [here](https://academo.org/demos/estimating-pi-monte-carlo/) )
- compare these estimates using interactive charts (i.e. for efficiency, run-time, stability)
- visualize  how to derive $\pi$ in a graphical or algebraic way 
- visualize other intersting numbers such as $\phi$ (golden ratio), or the  Euler number, or $\tau$ 

### Accessibility

## Technologies Used 

- GitPod as IDE [Link](https://www.gitpod.io/)
- Git / GitHub  for Version Control [Link] (https://github.com/)
- Figma for Wireframs [Link](https://www.figma.com/)
- Mac OS Image Preview Tool for cropping and resizing Images 
- Favicon for making a browser Icon [Link](https://favicon.io/favicon-converter/)
- W3 Validation Tools for Testing [Link](https://validator.w3.org/)
- Shields.io for adding badges this Readme file [Link](https://shields.io/)

### Languages Used

- HTML 
- CSS 
- Javascript

### Frameworks Used
- N/A

----- 

## Deployment and Local Development 

### Deployment 

### Local Development

#### How to Fork

#### How to Clone

----- 

## Testing 

### Testing Procedure 
The website was tested extensively for several apsects , and the results were documented in [TO DO TESTING.md](./TESTING.md) 

- Functionality
- User Stories
- Usability and Accessibility 
- Compatibility and Responsiveness 

Also, this website was developed using a `test-driven development` (TDD) approach using the `JEST` framework for javascript. Results of of the unit tests are documented in same document above. The reasons for TDD is to 
- ... ensure core functionality
- ... better code re-usability 
- ... better code readibility by enforcing smaller functions.

(clean code principles).

--- 

### Solved Bugs 
- the `d3` library would cause `jest` unit test to fail with a `Reference Error: d3 is not defined`. It was not easy to fix this since documentation about unit testing and d3 is sparse. The solution was not to import `d3.js` via a script but by installing through `npm install d3 --save-dev` and commenting out the web-import
- This still did not work as it caused a ` SyntaxError: Cannot use import statement outside a module` inside the unit test module . The problem was the line `import * as d3 from "d3"` causing an `SyntaxError: Unexpected token 'export'`. The unit test finally passes with solutions from (Link to [Stackoverflow](https://stackoverflow.com/questions/69226759/jest-unexpected-token-export-when-using-d3)) to map to the minified build of `d3` and (Link to [Stackoverflow](https://stackoverflow.com/questions/9948350/how-to-use-d3-in-node-js-properly)) and to load the `d3` library using `const d3 = require('d3');`
- The functions were tested correctly in `jest` - but trying to call them in the browser caused a error `Uncaught ReferenceError: module is not defined`. This problem was mentioned in the Code Institute slack channel (`#project-miletone-2`, 18.April 2022 'automated testing (as per requirements) causing an this error"). The solution was (I am not 100% sure if that is the case) to modify the `module:exports statement` and the import on the `diagram.test.js` side.
- Now all unit test pass also with functions that use the `d3`. But when opening the script in the browser, I am getting an `Uncaught ReferenceError: module is not defined` which is caused by the `module.exports`. It seems like (see [Stackoverflow](https://stackoverflow.com/questions/64914701/jest-module-not-defined)) that I am using `node.js` syntax for my unit test which the browser does not understand. Bummer! I do want to follow TDD development as a learning experience for this project, but i also want to make it run without errors in the browser - so not using TDD was not a solution for me. 
- The final clue gave this Youtube Tutorial [15. Install Jest Testing Framework with npm for ES6 module support - JavaScript Testing](https://youtu.be/ZnIv8u2-XrA). The problem above was caused by a conflict of two types of Javascript (commonJS and ES6), where commonJS is required for testing with JEST and ES6 for scripts that run in the browser. The solution to this problem as per [this Youtube tutorial](https://youtu.be/ZnIv8u2-XrA) was to install `babel`. According to this tutorial, the way to solve this problem was :
    - go to the `babel.js` website > `Setup` 
    - click on `Jest`
    - in gitpod, create a `.babelrc` file in the root directory with content 
        ```js
        {
            "presets": ["@babel/preset-env"]
        }
        ```
    - install babel preset with `npm install @babel/preset-env --save-dev` (as mentioned on website)
- This passes now successfully the unit test and allows import/export via the `export function` command into `jest`. But when i tried to add an eventlistener to invoke a function that is being testing with `Jest`, the console would throw an error `Uncaught ReferenceError: buttonClick is not defined`. The solution to that was to **not** import the javascript file that is tested by `jest` into the browser that is being tested. Instead, the way to go was to create a new `main.js` that **imports** the (successfully tested) functions, adds an event listener to the button and calls the imported `buttonClick` function. Heureka!
- While functions without `d3` are now running correctly in the browser and can be tested with `jest`, my previous approach to test functions that use `d3` in `jest` failed with an error message (`SyntaxError: Unexpected token 'export'` of the named export. The problem here is now that we are using ES6 syntax in our function (see `diagram.js`) but jest runs in `node.js`. A solution to this problem was hinted here : [Stackoverflow](https://stackoverflow.com/questions/72893900/how-to-import-d3-js-in-a-node-and-typescript-project-err-require-esm) . Thi post recommends (until further notice) to use the last stable build of `d3` that worked under `node.js`. Since this project here does not require any latest features of `d3`, I followed the adivse and used `v6.7.0`. 
- the browser still had a problem with loading functions that import `d3`. I will follow the approach from this Youtube tutorials [18. Webpack installation ](https://youtu.be/vGZoGwBC7js) and  [19. Babel Loader Setup in the Webpack 4 ](https://youtu.be/9KL8ob7utr8) . This video recommeds to convert all ES6 into ES5 before loading the file into the browser using `webpack`. To do this, they are 
    - install `wepack` and `webpack-cli` using default settings, see on [their website](https://webpack.js.org/)
    - go to babel website  > `Setup`
    - click on `webpack`
    - install on the terminal via `npm install --save-dev babel-loader @babel/core`
    - create a `webpack.config.js` config file and add
        ```js
            module: {
                rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                    }
                }
                ]
            }
        ```
    - before loading into the browser, you need to compiles your ES6 code into ES5 by `npm run build` (assuming `"build": "webpack"` to the `scripts` of `package.json`)
- Now that everyting seemed to work fine (functions using `d3` could be tested with `jest` and be displayed in browsers after `babel` converts them to `ES5` ), the `dependabot[bot]` created a warning that using the old version `6.7.0` of `d3` is a security risk in the `d3-color` sub-package due to ` vulnerable to a denial of service, caused by improper input validation`, see [this Article from IBM](https://www.ibm.com/support/pages/security-bulletin-vulnerability-d3-color-affects-ibm-process-mining-ws-2022-0322#:~:text=DESCRIPTION%3A%20d3%2Dcolor%20is%20vulnerable,regular%20expression%20denial%20of%20service.). Now, to fix this security bug, `dependabot[bot]` automatically updated this repository to the latest `d3` version from `6.7.0` to `7.8.4` - but with the consequence that the unit test fails now again - that's why we downgraded to `6.7.0` in the first place. 
    - Being mindful about the scope of this website, there were several options how to address this bug. One option was to simply avoid testing any functions that utilized the `d3` library, and only test functions that calculated pi, for example. However, this was not an ideal solution as it would significantly reduce the coverage of the unit tests.
    - Another option was to use a dedicated front-end framework, such as `vue`, to handle the display in the browser while still being able to use `jest` for testing. However, this would have introduced unnecessary complexity, which was beyond the scope of this project. In the future, when more experience with these tools is gained, this may be an appropriate solution.
    - A third option was to switch to a different unit testing framework, such as `mocha`, as the root of the conflict was between `jest` and `d3`. This seemed like a viable solution.
- Moving from `jest` to `mocha` raised the simuliar error messages that i had previously with `jest` regarding `ES6` types . The solution was as per previous solution the `webpack` tool to convert the javascript into a compiled version that the browser understands. There was one more complication : the following code section can be used in `jest` but not in `mocha`
    ```
    let fs = require('fs')
    let fileContents = fs.readFileSync('index.html', 'utf-8')
    document.open()
    document.write(fileContents)
    document.close()
    document.
    ```
    -  a solution to this problem was suggested in [Testing with Node, Jest, and JSDOM](https://sparkbox.com/foundry/improve_unit_testing_with_mocha_chai_jsdom) to create a fake DOM element using `jsdom`, which then replaces the `global.document`. This makes it now `d3` functions accessible for manipulaton during the unit test. There are some words of caution about this approach on [the JSDOM github page](https://github.com/jsdom/jsdom) but I think it can be justified for this project : `1)` it only executes script written in this document `2)` it will not be executed on the actual website, only during unit testing. On a later stage, when I am more familiar with `vue` or `react`, this will not be an issue. 
- the `dependabot` spotted a potential security risk of using `jsdom` : `Prototype Pollution in JSON5 via Parse Method`. I start to feel bad about these security risk and will refactor this repository to be more simple. 


### open Bugs 


---- 

## Credits 

### Code Used

- Github badges from [Shields.io](https://shields.io/)
- Excel Template for Website Testing [Link to Page](https://www.guru99.com/download-sample-test-case-template-with-explanation-of-important-fields.html)
- Animations based on tutorials 
    - for getting start with  D3.js library : [d3-graph-gallery](https://d3-graph-gallery.com/intro_d3js.html)
    - using transitions in D3 : [d3-graph-gallery](https://d3-graph-gallery.com/graph/interactivity_transition.html)
- Example of how to test properties of a D3 object using JEST  : [Link to Website](https://busypeoples.github.io/post/testing-d3-with-jasmine/)                 
### Content 

- All of the content was written by myself.
- Externally used code (such as code snippets from stackoverflow) in this project are referenced in this Readme and inside the Html/Css/Js source code. 


## Acknowledgements
- Teaching and Support from Code Insitute [Code Insitute](https://codeinstitute.net/)
    - Lesson "JavaScript Testing with Jest" and the testing approach of its "Simon" codealong Challenge
- Example Readme from Kera Cudmore [Kera's Github](https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md)
- Color Palette Generator from [Mycolor.space](https://mycolor.space/)
- Font Generator from  [Fontjoy](https://fontjoy.com/)
- Fonts from [Google Fonts](https://fonts.google.com/) 
- Images from  [Pexels](https://pexels.com/) : 
    - add refernce HERE once decided on final images 
- Kevin Powell's [Youtube](https://www.youtube.com/@KevinPowell) Channel: 
    - How to approach a design layout with Figma [Youtube Link](https://youtu.be/KYFwcIRx16g)
    - 6 simple typography tips to more professional looking sites [Link](https://youtu.be/6ardZEhjvV0)
    - Give your site a fantastic color scheme fast [Youtube Link](https://youtu.be/mq8LYj6kRyE)
    - Concepts to help simplify CSS layouts [Youtube Link](https://youtu.be/nYyFf-97Qqg) 
    - Build a responsive website with HTML & CSS   [Part1 ](https://youtu.be/h3bTwCqX4ns), [Part 2](https://youtu.be/3K6zr1CdZy8), [Part 3](https://youtu.be/Ch_LoWKLv3A)
    - The secret to mastering CSS layouts [Youtube Link](https://youtu.be/vHuSz4fRM88)
    - 5 CSS mistakes that I see way too often [Youtube](https://youtu.be/iHEkRIF7zxI)
    - From Design to Code - HTML & CSS from scratch [Youtube](https://www.youtube.com/watch?v=KqFAs5d3Yl8)
- Useful articles how to approach unit testing of d3 and TDD :
    - Tips for Unit Testing D3 [Link](https://eng.wealthfront.com/2016/07/27/tips-for-unit-testing-d3/)
    - Testing D3.js With Jasmine [Link](https://busypeoples.github.io/post/testing-d3-with-jasmine/)
    - Leveling Up D3: Test Driven Development [Link](https://www.eventbrite.com/engineering/leveling-up-d3-test-driven-development/)
- A great tutorial on using Jest for JavaScript unit testing while maintaining browser compatibility especilly :
    - [15. Install Jest Testing Framework with npm for ES6 module support - JavaScript Testing](https://youtu.be/ZnIv8u2-XrA)
    - [18. Babel Loader Setup in the Webpack 4 Configuration file for compiling Code - Part 1](https://youtu.be/vGZoGwBC7js) 
    - [19. Babel Loader Setup in the Webpack 4 Configuration file for compiling Code - Part 2 ](https://youtu.be/vGZoGwBC7js) 
- Very eye-opening talks from Dylan Israel : [Link - Clean Coding](https://youtu.be/YQsU2Zq2Zis) 
- Thanks to my mentor Ronan (Code Institute) for his advices and clear feedback 









