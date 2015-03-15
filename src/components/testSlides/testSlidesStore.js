var Store = require("nuclear-js").Store;
var jadeContent = require("./testSlides.jade");
var Immutable = require("immutable");
var $ = require("jquery");

var testSlidesStore = Store({
  getInitialState: function() {
    var slideSelector = "section";
    $("body").append($("<div id=\"rd-hidden-content\">"));
    $(jadeContent()).appendTo($("#rd-hidden-content"));
    return Immutable.Map({
      slides: $("#rd-hidden-content")
                .find(slideSelector)
                .map(function (index, slide) {
                  return slide.innerHTML;
                })
    });
  },

  initialize: function() {

  }
});

module.exports = testSlidesStore;
