import { expect } from "chai";
import greet from "../../exercises/31-esm/greet.js";
import { greeter } from "../../exercises/31-esm/esm.js";

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const greeterFilePath = path.resolve(
  __dirname,
  "../../exercises/31-esm/greet.js"
);

describe("ES Modules - Greet", () => {
  describe("Default Exports", () => {
    it('should have a new file named "greet.js" inside of "exercises/31-esm/". (NOTE that this is case sensitive)', () => {
      expect(fs.existsSync(greeterFilePath)).to.be.true;
    });
    it('"greet.js" should export the "greet" function as default', () => {
      expect(greet).to.be.a("function");
    });
    it('"esm.js" should import the "greet" function from "greet.js"', () => {
      expect(greeter).to.be.a("function");
    });
    it('The "greet" function should work, even after you move it to a different file', () => {
      const greeting = greet("Twinkle Toes");
      expect(greeting).to.equal("Hello Twinkle Toes!");
    });
  });
});
