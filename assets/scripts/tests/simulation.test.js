/**
 * @jest-environment jsdom
 */

const simulation = module.require('../simulation');

describe("simulation", () => {
    test("simulation exists", () => {
        expect(simulation).toBeDefined();
    });
});