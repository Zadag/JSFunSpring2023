/**
 * This uses Nightwatch to test UI.
 * @see https://nightwatchjs.org/guide/using-nightwatch/writing-tests.html
 * @see https://testautomationu.applitools.com/nightwatchjs-tutorial/chapter1.html
 */
describe("UI Tests with Nightwatch", () => {
  after((browser, done) => {
    browser.end(() => {
      done();
    });
  });

  it('should search for "Nightwatch.js tutorials" tutorials', (browser) => {
    browser
      .url("https://www.google.com/")
      .click("textarea")
      .setValue("textarea", "Nightwatch.js tutorials")
      .saveScreenshot("./screenshots/screen1.png")
      .submitForm("form")
      .waitForElementPresent("#search", 5000)
      .expect.element("#search").to.be.visible;

    browser.saveScreenshot("./screenshots/screen2.png");
  });
});
