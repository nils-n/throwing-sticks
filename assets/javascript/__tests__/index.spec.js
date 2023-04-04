/**
 * @jest-environment jsdom
 */

import { doSomething, SomeClass, Diagram  } from "../index";

describe("A unit test", () => {
    it("called, no param, returns true", () => {
        const result = doSomething();

        expect(result).toBe(true);
    })
    it("SomeClass invoked, no param, returns true", () => {
        const sut = new SomeClass();

        const result = sut.invoke()

        expect(result).toBe(true);
    })
    it("Diagram invoked, testing dimension", () => {
        const exampleDim = [300, 300];
        const sut = new Diagram(exampleDim[0],exampleDim[1]);

        const result = sut.area

        expect(result).toBe( exampleDim[0] * exampleDim[1] );
    })


})