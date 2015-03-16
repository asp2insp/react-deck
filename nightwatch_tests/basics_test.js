var $ = require("jquery");

var slide0 = 'div[data-index="0"]';
var slide1 = 'div[data-index="1"]';
var slide2 = 'div[data-index="2"]';


module.exports = {
  "Test Basic Functionality" : function (browser) {
    browser
      .url("http://localhost:8080/src/")
      .waitForElementVisible(slide0, 1000)
      .assert.cssClassPresent(slide0, "fullscreen")
      .assert.containsText(slide0 + ' h2', 'Introduction to Automated Testing')
      .waitForElementVisible('#next', 1000)

      .click('#next')
      .waitForElementNotVisible(slide0, 1000)
      .pause(1000)
      .waitForElementVisible(slide1, 1000)
      .assert.cssClassPresent(slide1, "fullscreen")
      .assert.containsText(slide1 + ' h2', 'Automated Testing')

      .click('#next')
      .waitForElementNotVisible(slide1, 1000)
      .pause(1000)
      .waitForElementVisible(slide2, 1000)
      .assert.cssClassPresent(slide2, "fullscreen")
      .assert.containsText(slide2 + ' h2', 'Types of Automated Tests')

      .click('#previous')
      .waitForElementNotVisible(slide2, 1000)
      .pause(1000)
      .waitForElementVisible(slide1, 1000)
      .assert.cssClassPresent(slide1, "fullscreen")

      .click('#previous')
      .waitForElementNotVisible(slide1, 1000)
      .pause(1000)
      .waitForElementVisible(slide0, 1000)
      .assert.cssClassPresent(slide0, "fullscreen")

      .click('#previous')
      .waitForElementVisible(slide0, 1000)
      .assert.cssClassPresent(slide0, "fullscreen")

      // Assert all slides visible when toggle into overview mode
      .click('#toggle')
      .waitForElementVisible(slide0, 1000)
      .assert.cssClassPresent(slide0, "mini")
      .waitForElementVisible(slide1, 1000)
      .assert.cssClassPresent(slide1, "mini")
      .waitForElementVisible(slide2, 1000)
      .assert.cssClassPresent(slide2, "mini")
      .pause(1000)

      .end();
  }
};