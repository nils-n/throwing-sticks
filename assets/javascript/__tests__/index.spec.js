import { doSomething, SomeClass } from "../index";

describe("A unit test", () => {
    it("called, no param, returns true", () => {
        const result = doSomething();

        expect(result).toBe(true);
    })
    it("Class invoked, no param, returns true", () => {
        const sut = new SomeClass();

        const result = sut.invoke()

        expect(result).toBe(true);
    })

})