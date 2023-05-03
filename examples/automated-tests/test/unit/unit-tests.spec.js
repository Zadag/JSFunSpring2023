/**
 * Dependencies for asserting whether or not something is what we expect
 * @see https://www.chaijs.com/api/bdd/
 */
import { expect } from "chai";

/**
 * Dependencies for faking the browser
 * @see https://github.com/jsdom/jsdom
 */
import { JSDOM } from "jsdom";
import * as fs from "fs"; // You do not need to install this. It comes with node.
import path from "path"; // You do not need to install this. It comes with node.

/**
 * Dependencies for faking our code
 * @see https://sinonjs.org/
 * @see https://stackoverflow.com/questions/62675699/difference-between-fake-spy-stub-and-mock-of-sinon-library-sinon-fake-vs-spy
 */
import sinon from "sinon";
/**
 * Makes AJAX requests, which we want to fake
 */
import axios from "axios";

/**
 * Each file has it's own scope. I can't access something from another
 * file unless I import it, because it is out of scope.
 * Including the functions from "unit-tests.js"
 * so that I can test.
 */
import {
  add,
  createObject,
  handleButtonClick,
  getSingleQuote,
} from "../../unit-tests.js"; // relative pathway to "unit-tests.js" file

describe("examples/unit-tests/unit-tests.js", () => {
  describe("add", () => {
    it("should add two numbers", () => {
      const sum = add(2, 3);
      expect(sum).to.equal(5);
    });
  });

  describe("createObject", () => {
    it("should create an object with a given property and value", () => {
      const obj = createObject("email", "myemail@example.com");
      /**
       * We need to include the "deep" with objects and arrays
       * (otherwise, you are testing a "shallow copy", which won't pass)
       */
      expect(obj).to.deep.equal({
        email: "myemail@example.com",
      });
    });
  });

  /**
   * This fakes the browser.
   * @see https://github.com/jsdom/jsdom
   */
  describe("handleButtonClick", () => {
    before(async () => {
      /**
       * This is importing the file "unit-tests.html" as a string.
       * Alternatively, you can just create a string of html like this:
       * @example
       * ```javascript
       * const htmlString = "<html><body><button>Click Me!</button></body></html>"";
       * ```
       */
      const htmlString = fs.readFileSync(
        path.normalize("./test/unit/unit-tests.html"),
        {
          encoding: "utf8",
        }
      );
      /**
       * This is faking the browser, using the contents from the "unit-tests.html" file
       */
      const window = new JSDOM(htmlString).window;
      const { document } = window;
      global.window = window;
      global.document = document;
    });

    after(() => {
      /**
       * @see https://github.com/jsdom/jsdom#user-content-closing-down-a-jsdom
       */
      window.close();
      global.window = undefined;
    });

    it('should disable a button and make it display "Loading" when clicked', () => {
      const button = document.querySelector("button");
      handleButtonClick(button);
      button.click();
      expect(button.textContent).to.equal("Loading ...");
      expect(button.hasAttribute("disabled")).to.be.true;
    });
  });

  /**
   * This "subs" or essentials fake an AJAX request.
   * For more in-depth documentation,
   * @see https://sinonjs.org/how-to/stub-dependency/
   */
  describe("getSingleQuote", () => {
    let stub;

    after(() => {
      sinon.restore();
    });

    it("should retrieve a quote from the Ron Swanson API", async () => {
      /**
       * This "stubs" an axios request, which means it fakes the response of an AJAX request,
       * so that I can reliably test my function "getSingleQuote"
       */
      stub = sinon.stub(axios, "request");
      const fakeResponse = {
        data: [
          "Capitalism: God’s way of determining who is smart and who is poor.",
        ],
      };
      stub.returns(Promise.resolve(fakeResponse));

      const quote = await getSingleQuote();
      expect(quote).to.equal(
        "Capitalism: God’s way of determining who is smart and who is poor."
      );
    });
  });
});
