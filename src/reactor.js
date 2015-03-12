var testSlidesStore = require("./components/testSlidesStore.js");
var Reactor = require('nuclear-js').Reactor;

var reactor = Reactor({
  stores: {
    testSlidesStore: testSlidesStore,
  }
});

module.exports = reactor;