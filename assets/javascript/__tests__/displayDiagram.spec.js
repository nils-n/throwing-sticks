import { doSomething } from "../displayDiagram";

describe("A unit test", () => {

    it("called, no param, returns true", () => {
        const result = doSomething();

        expect(result).toBe(true);
    })
   
})