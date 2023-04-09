# Setup of Implementation 

This section is to document the implementation approaches of this project.  

The features that needed to be addressed were: 

| Feature               | Description                                                                                                                                           |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Test-driven development  | While this feature was not strictly required, I purposely added it to this project in order to create clean, maintainable, and readable code that eliminates bugs before the appear  |
| Testability           | In order to feed functions into an automated testing framework such as `Jest` |
| Ability to run in Browser  | The functions eventually need to be able to be work in Browser - just passing the unit test is not enough. |
|  Security             |    The importance of this feature appeared during the implementation work - it is important to use a late and safe version of external libraries used (and not necessarily a conventient older version you find a YouTube tutorial for)                                              |
|                       |                                                                                                                                                       |

It just so appeared that some of these features were mutually exclusive, and this document describes the reasoning when making a compromise towards one or other feature.

Examples: 
- it was not acceptable to have 100% test coverage but the functions would not work on the browser.
- It was not acceptable to have an implementation that achieves 100% test coverage, runs in the browser, but uses deprecated version of an external library that has been identified with a security risk
- it was acceptable for the scope of this project to not test <u>**every**</u> aspect of an external library. It was enough for this scope to test the <u>**input**</u> to this library
- it was acceptable to be not too dogmatic regarding the TDD approach in order to deliver the project still within time - being mindful about the 80/20 Pareto principle that sometimes 20% of the tests could take up 80% of the time. For example, the behaviour of DOM elements was tested manually,and that would be marked as sufficient for this project.


Visualization: 
- In order to visualize how the above features are satisfied by of each approach, the following conventions will be used : 

    | Result             | Label |
    |---------------------|-------------|
    | Works without issue |  <img src="https://img.shields.io/badge/Runs in Browser-working-brightgreen.svg?logo=LOGO">   |
    | Is acceptable      |   <img src="https://img.shields.io/badge/Runs in Browser-acceptable-green.svg?logo=LOGO">  |
    | Is not acceptable        |  <img src="https://img.shields.io/badge/Jest-not acceptable-red.svg?logo=LOGO">   |




 --- 

 ##  Approaches for implementation 

### 1. Runs in the browser but testing fails 

- the `d3` library would cause `jest` unit test to fail with a `Reference Error: d3 is not defined`. It was not easy to fix this since documentation about unit testing and d3 is sparse. The solution was not to import `d3.js` via a script but by installing through `npm install d3 --save-dev` and commenting out the web-import


- This still did not work as it caused a ` SyntaxError: Cannot use import statement outside a module` inside the unit test module . The problem was the line `import * as d3 from "d3"` causing an `SyntaxError: Unexpected token 'export'`. The unit test finally passes with solutions from (Link to [Stackoverflow](https://stackoverflow.com/questions/69226759/jest-unexpected-token-export-when-using-d3)) to map to the minified build of `d3` and (Link to [Stackoverflow](https://stackoverflow.com/questions/9948350/how-to-use-d3-in-node-js-properly)) and to load the `d3` library using `const d3 = require('d3');`

    <img src="https://img.shields.io/badge/TDD-not acceptable-red.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Testability-not acceptable-red.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Runs in Browser-working-brightgreen.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Security-working-brightgreen.svg?logo=LOGO">

--- 

### 2. Testing works but fails in the browser 

- The functions were tested correctly in `jest` - but trying to call them in the browser caused a error `Uncaught ReferenceError: module is not defined`. This problem was mentioned in the Code Institute slack channel (`#project-miletone-2`, 18.April 2022 'automated testing (as per requirements) causing an this error"). The solution was (I am not 100% sure if that is the case) to modify the `module:exports statement` and the import on the `diagram.test.js` side.
- Now all unit test pass also with functions that use the `d3`. But when opening the script in the browser, I am getting an `Uncaught ReferenceError: module is not defined` which is caused by the `module.exports`. It seems like (see [Stackoverflow](https://stackoverflow.com/questions/64914701/jest-module-not-defined)) that I am using `node.js` syntax for my unit test which the browser does not understand. Bummer! I do want to follow TDD development as a learning experience for this project, but i also want to make it run without errors in the browser - so not using TDD was not a solution for me. 

    <img src="https://img.shields.io/badge/TDD-works-brightreen.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Testability-works-brightgreen.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Runs in Browser-not acceptable-red.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Security-working-brightgreen.svg?logo=LOGO">

---

### 3. Testing works, works in the browser. The end of the journey?

- The approach to fix this issue follows the advice from this Youtube Tutorial [15. Install Jest Testing Framework with npm for ES6 module support - JavaScript Testing](https://youtu.be/ZnIv8u2-XrA). The problem above was caused by a conflict of two types of Javascript (commonJS and ES6), where commonJS is required for testing with JEST and ES6 for scripts that run in the browser. The solution to this problem as per [this Youtube tutorial](https://youtu.be/ZnIv8u2-XrA) was to install `babel`. According to this tutorial, the way to solve this problem was :
    - go to the `babel.js` website > `Setup` 
    - click on `Jest`
    - in gitpod, create a `.babelrc` file in the root directory with content 
        ```js
        {
            "presets": ["@babel/preset-env"]
        }
        ```
    - install babel preset with `npm install @babel/preset-env --save-dev` (as mentioned on website)
- This passes now successfully the unit test and allows import/export via the `export function` command into `jest`. But when i tried to add an eventlistener to invoke a function that is being testing with `Jest`, the console would throw an error `Uncaught ReferenceError: buttonClick is not defined`. The solution to that was to **not** import the javascript file that is tested by `jest` into the browser that is being tested. Instead, the way to go was to create a new `main.js` that **imports** the (successfully tested) functions, adds an event listener to the button and calls the imported `buttonClick` function. 
- While functions without `d3` are now running correctly in the browser and can be tested with `jest`, my previous approach to test functions that use `d3` in `jest` failed with an error message (`SyntaxError: Unexpected token 'export'` of the named export. The problem here is now that we are using ES6 syntax in our function (see `diagram.js`) but jest runs in `node.js`. A solution to this problem was hinted here : [Stackoverflow](https://stackoverflow.com/questions/72893900/how-to-import-d3-js-in-a-node-and-typescript-project-err-require-esm) . Thi post recommends (until further notice) to use the last stable build of `d3` that worked under `node.js`. Since this project here does not require any latest features of `d3`, I followed the adivse and used `v6.7.0`. 
- the browser still had a problem with loading functions that import `d3`. I will follow the approach from this Youtube tutorials [18. Webpack installation ](https://youtu.be/vGZoGwBC7js) and  [19. Babel Loader Setup in the Webpack 4 ](https://youtu.be/9KL8ob7utr8) . This video recommeds to convert all ES6 into ES5 before loading the file into the browser using `webpack`. To do this, they are: 
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
    - now, apparently we have reached the end of our journey and can actually begin to implement the first line of code for the project: 

    <img src="https://img.shields.io/badge/TDD-acceptable-green.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Testability-acceptable-green.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Runs in Browser-acceptable-green.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Security-apparently working-yellow.svg?logo=LOGO">

--- 

### 4. Testing works, works in the the browser, but is a security risk


- Now that everyting seemed to work fine (functions using `d3` could be tested with `jest` and be displayed in browsers after `babel` converts them to `ES5` ), the `dependabot[bot]` created a warning that using the old version `6.7.0` of `d3` is a security risk in the `d3-color` sub-package due to ` vulnerable to a denial of service, caused by improper input validation`, see [this Article from IBM](https://www.ibm.com/support/pages/security-bulletin-vulnerability-d3-color-affects-ibm-process-mining-ws-2022-0322#:~:text=DESCRIPTION%3A%20d3%2Dcolor%20is%20vulnerable,regular%20expression%20denial%20of%20service.). Now, to fix this security bug, `dependabot[bot]` automatically updated this repository to the latest `d3` version from `6.7.0` to `7.8.4` - but with the consequence that the unit test fails now again - that's why we downgraded to `6.7.0` in the first place. 

At this point in time, there were following options to deal with this problem: 

- ...Being mindful about the scope of this website, there were several options how to address this bug. One option was to simply avoid testing any functions that utilized the `d3.js` library, and only test functions that calculated pi, or to test the input for the `d3.js` functions, for example. However, this was not an ideal solution as it would reduce the coverage of the unit tests.
- ...Another option was to use a dedicated front-end framework, such as`react`or `vue`, to handle the display in the browser while still being able to use `jest` for testing. However, this would have introduced unnecessary complexity, which was beyond the scope of this project. In the future, when more experience with these tools is gained, this may be an appropriate solution.
- ...A third option was to switch to a different unit testing framework, such as `mocha`, as the root of the conflict was between `jest` and `d3`. This seemed like a viable solution.
- ... Of course, there would have been the option of ignoring the security issue as this project is not meant to be used in a commerical setting. However, this seemed to me to the appropriate answer to the problem, also it would have been the easier way for sure.

    <img src="https://img.shields.io/badge/TDD-works-brightgreen.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Testability-works-brightgreen.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Runs in Browser-works-brightgreen.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Security-not acceptable-red.svg?logo=LOGO">

---

### 4. Switching from Jest to Mocha - The grass is not greener on the other side

- I tried to explore the option of moving to a different testing framework as was suggested on various sources from a google search: 
    - [Unit Test of D3 without browser](https://glebbahmutov.com/blog/unit-testing-d3-code-without-browser/), 
    - [How to unit test your D3 applications](https://iamalivingcontradiction.wordpress.com/2015/11/01/how-to-unit-test-your-d3-applications/)
    - [Testing React Apps with Mocha](https://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/)
    - [Unit Test strategies for D3.js](https://itecnote.com/tecnote/d3-js-what-are-unit-testing-strategies-for-d3js/)

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

    <img src="https://img.shields.io/badge/TDD-works-brightgreen.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Testability-works-brightgreen.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Runs in Browser-works-brightgreen.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Security-not acceptable-red.svg?logo=LOGO">
---

### 5. The final approach - Less is sometimes more 

- The `dependabot` eventually did flag the use of `jsdom` as a potential security risk with a warning `Prototype Pollution in JSON5 via Parse Method`. This function was used in this repository to test changes to the DOM during unit testing. Since i did not want to introduce an unnecesary security risk, the best short-term solution to this problem was to refactor the code and its testing procedure to be more simplistic. This solution was  inspired by [this talk from David Whitney](https://www.youtube.com/watch?v=D7LKslgwxmQ) where he advocates minimalistic testing with only using `jest`, `jest-cli` and `@babel/present-env`:
    ```
    npm init
    npm install --save-dev @babel/preset-env jest jest-cli @types/jest
    ```
- In this approach, the scope of the unit testing during the `test-driven developement` covers the entire simulation and the data processing behind the scene to calculate $\pi$ . For the visual diagrams, testing was reduced to check the `input` to the `d3.js` library by creating a `DisplayConfiguration` class, which properties could be asserted and checked using `jest` in a `TDD`-fashioned way.
- The remaining part of how `d3.js` functions render the diagrams, and makes changes to the DOM, was then tested in retrospective after and during the implementation using `manual testing` approach, which is justified regarding the scope of the project. Eventually, with more Javascript experience, a complete solution via `react` or `vue` would allow to also do the `TDD` aproach for visual representations of libraries such as `d3.js`. In total,  given the time constraints of the project it was justified to leave this solution for future implementation.
- Given that, this solution was finally acceptable as it:
    - allowed to implement the project using TDD  
    - allowed for testability with an acceptable coverage 
    - works perfectly in the browser
    - poses no security risk while using it.
    
    <img src="https://img.shields.io/badge/TDD-acceptable-green.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Testability-acceptable-green.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Runs in Browser-works-brightgreen.svg?logo=LOGO">
    <img src="https://img.shields.io/badge/Security-works-brightgreen.svg?logo=LOGO">

---
With more Javascript experience, a complete solution via `react` or `vue` will allow to also do the `TDD` aproach for visual representations of libraries such as `d3.js`. In total, given the time constraints of the project it was justified to leave this solution for future implementation.
