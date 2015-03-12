var Store = require('nuclear-js').Store;

var testSlidesStore = Store({
  getInitialState: function() {
    return [];
  },

  initialize: function() {
    // this will get called via `reactor.dispatch('createSlides')`
    // where the payload is a list of slides
    this.on('setTaxPercent', function(slides) {
      return slides;
    })
  }
});

module.exports = {
  testSlidesStore: testSlidesStore
};