module.exports = {
  "Test Basic Functionality" : function (browser) {
    browser
      .url("http://localhost:8080/src/")
      .waitForElementVisible('div[data-index="0"]', 1000)
      .assert.containsText('div[data-index="0"] h2', 'Introduction to Automated Testing')
      .waitForElementVisible('#next', 1000)
      .click('#next')
      .waitForElementNotVisible('div[data-index="0"]', 1000)
      .pause(1000)
      .waitForElementVisible('div[data-index="1"]', 1000)
      .assert.containsText('div[data-index="1"] h2', 'Automated Testing')
      .end();
  }
};