/**
 * You will need to have your package.json setup and mocha and chai
 * dependencies installed for this to work. (We will do this in class).
 *
 * Before running this test (for this exercise only), you must be in the same
 * folder as this file. If you do not know, type `pwd`. You should see
 * `path/to/JSFunSpring2023/exercises/30-unit-testing/`.
 * If you only see `path/to/JSFunSpring2023/` type:
 * ```bash
 * cd exercises/27-unit-testing/
 * ```
 * To run this test:
 * ```bash
 * npm run test
 * ```
 */

/**
 * I'm importing the "expect" library from chai.
 * This is kinda of like including JavaScript libraries with <script></script> tags.
 */
import { expect } from "chai";

/**
 * Each file has it's own scope. I can't access something from another
 * file unless I import it, because it is out of scope.
 * Including the functions from `exercises/27-unit-testing/unit-testing.js`
 * so that I can test.
 */
import { add, subtract, isEvenNumber, findAdults } from "./unit-testing.js"; // relative pathway to unit-testing.js file

describe("Unit Testing", () => {
  // Example
  describe("add", () => {
    it("should add two numbers", () => {
      const sum = add(2, 3);
      expect(sum).to.equal(5);
    });
  });

  /**
   * Write a unit test for `subtract` here.
   */
  describe("subtract", () => {
    it("should subtract two numbers", () => {
      const diff = subtract(10, 5);
      expect(diff).to.equal(5);
    });
    it("should work with negative numbers", () => {
      const diff = subtract(5, 10);
      expect(diff).to.equal(-5);
    });
  });
  /**
   * Write two tests for `isEvenNumber` here:
   * - The first should test if `isEvenNumber` returns true for even numbers
   * - The second should test if `isEvenNumber` returns false for odd numbers
   * Use a a different assertion than `.equal()`
   * @see https://www.chaijs.com/api/bdd/
   */

  describe("isEvenNumber", () => {
    // it("should return a boolean", () => {
    //   const isEven = isEvenNumber(6);
    //   expect(isEven).to.be.a.bool;
    // });
    it("returns true if a number is even", () => {
      const isEven = isEvenNumber(6);
      expect(isEven).to.be.true;
    });
    it("returns false if a number is odd", () => {
      const isEven = isEvenNumber(5);
      expect(isEven).to.be.false;
    });
  });

  describe("findAdults", () => {
    // Remove the `.skip` when you are ready to write this test
    it("will find, in a multidimensional array, all the people older than 18", () => {
      /**
       * Complete the unit test for `findAdults` here.
       * Hint: Arrays are passed by reference, so you will need to call on a test that deeply compares values.
       * @see https://www.chaijs.com/api/bdd/
       */
      const people = [
        { name: "Janet", age: 43 },
        { name: "Aiden", age: 10 },
        { name: "Chloe", age: 16 },
      ];

      expect(findAdults(people)).to.deep.equal([{ name: "Janet", age: 43 }]);
    });

    // Remove the `.skip` when you are ready to write this test
    it("will return an empty array if no adults are found", () => {
      /**
       * Complete the unit test for `findAdults` here, where you use a different assertion than `.equal()`
       * @see https://www.chaijs.com/api/bdd/
       */
      const people = [
        { name: "Liam", age: 3 },
        { name: "Emma", age: 17 },
        { name: "Ethan", age: 8 },
      ];
      expect(findAdults(people)).to.be.an("array").that.is.empty;
    });
  });
});
