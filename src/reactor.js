var testSlidesStore = require("./components/testSlides/testSlidesStore.js");
var Reactor = require("nuclear-js").Reactor;

var reactor = Reactor({
  stores: {
    slides: testSlidesStore
  }
});

module.exports = reactor;
