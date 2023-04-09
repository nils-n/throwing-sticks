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


 --- 

 ## History