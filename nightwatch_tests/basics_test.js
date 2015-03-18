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
      .assert.containsText(slide0 + ' h1', 'Introduction to Automated Testing')
      .pause(1000)

      .keys([browser.Keys.TAB, browser.Keys.TAB, browser.Keys.RIGHT_ARROW])
      .waitForElementNotVisible(slide0, 1000)
      .pause(1000)
      .waitForElementVisible(slide1, 1000)
      .assert.cssClassPresent(slide1, "fullscreen")
      .assert.containsText(slide1 + ' h1', 'Automated Testing')

      .keys([browser.Keys.RIGHT_ARROW])
      .waitForElementNotVisible(slide1, 1000)
      .pause(1000)
      .waitForElementVisible(slide2, 1000)
      .assert.cssClassPresent(slide2, "fullscreen")
      .assert.containsText(slide2 + ' h1', 'Types of Automated Tests')

      .keys([browser.Keys.LEFT_ARROW])
      .waitForElementNotVisible(slide2, 1000)
      .pause(1000)
      .waitForElementVisible(slide1, 1000)
      .assert.cssClassPresent(slide1, "fullscreen")

      .keys([browser.Keys.LEFT_ARROW])
      .waitForElementNotVisible(slide1, 1000)
      .pause(1000)
      .waitForElementVisible(slide0, 1000)
      .assert.cssClassPresent(slide0, "fullscreen")

      // Assert trying to go to the previous slide on the first slide doesn't do anything
      .keys([browser.Keys.LEFT_ARROW])
      .waitForElementVisible(slide0, 1000)
      .assert.cssClassPresent(slide0, "fullscreen")

      // Assert all slides visible when toggle into overview mode
      .keys([browser.Keys.UP_ARROW])
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