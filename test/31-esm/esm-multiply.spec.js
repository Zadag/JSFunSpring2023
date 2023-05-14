import { expect } from "chai";
import { multiply } from "../../exercises/31-esm/multiply.js";
import { multiplier } from "../../exercises/31-esm/esm.js";

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const multiplyFilePath = path.resolve(
  __dirname,
  "../../exercises/31-esm/multiply.js"
);

describe("ES Modules - Multiply", () => {
  describe("Named Exports", () => {
    it('should have a new file named "multiply.js" inside of "exercises/31-esm/". (NOTE that this is case sensitive)', () => {
      expect(fs.existsSync(multiplyFilePath)).to.be.true;
    });
    it('"multiply.js" should have the "multiply" function inside of it', () => {
      expect(multiply).to.be.a("function");
    });
    it('"esm.js" should import the "multiply" function from "multiply.js"', () => {
      expect(multiplier).to.be.a("function");
    });
    it('The "multiply" function should work, even after you move it to a different file', () => {
      const product = multiply(2, 5);
      expect(product).to.equal(10);
    });
  });
});
