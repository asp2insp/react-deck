var Store = require('nuclear-js').Store;
var jadeContent = require("./testSlides.jade");
var Immutable = require("immutable");

var testSlidesStore = Store({
  getInitialState: function() {
    var rootSelector = "article";
    var slideSelector = "section";
    $("body").append($("<div id=\"rd-hidden-content\">"));
    $(this.props.domTemplate()).appendTo($("#rd-hidden-content"));
    return Immutable.Map({
      slides: $("#rd-hidden-content")
                .find(this.props.slideSelector)
                .map(function (index, slide) {
                  return slide.innerHTML;
                })
    });
  },

  initialize: function() {
    // this will get called via `reactor.dispatch('createSlides')`
    // where the payload is a list of slides
    this.on('createSlides', function(slides) {
      return slides;
    })
  }
});

module.exports = {
  testSlidesStore: testSlidesStore
};