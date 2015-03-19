var Nuclear = require("nuclear-js");
var Immutable = require("immutable");
var Hash = require("../hash/hash.js");
var $ = require("jquery");

var presenterStore = Nuclear.Store({
  _hashImpl: Hash,
  getInitialState: function() {
    var hashString = this._hashImpl.getHash() || 0;
    return Immutable.Map({
      currentSlide: parseInt(hashString),
      mode: "presentation",
      slides: []
    });
  },

  initialize: function() {
    var self = this;
    $("body").append($("<div id=\"rd-hidden-content\">"));
    this.on("toggleMode", function(state) {
      var newMode = state.get("mode") === "presentation" ? "overview" : "presentation";
      return state.set("mode", newMode);
    });
    this.on("goPrevious", function(state) {
      var nextIndex = Math.max(state.get("currentSlide") - 1, 0);
      self._hashImpl.setHash(nextIndex);
      return state.set("currentSlide", nextIndex);
    });
    this.on("goNext", function(state) {
      var lastSlide = state.get("slides").length - 1;
      var nextIndex = Math.min(state.get("currentSlide") + 1, lastSlide);
      self._hashImpl.setHash(nextIndex);
      return state.set("currentSlide", nextIndex);
    });
    this.on("setCurrentSlide", function(state, input) {
      self._hashImpl.setHash(input);
      return state.set("currentSlide", input);
    });
    this.on("loadSlides", function(state, contentGenerator) {
        var slideSelector = "section";
        $(contentGenerator()).appendTo($("#rd-hidden-content"));
        return state.set("slides",
            $("#rd-hidden-content")
                .find(slideSelector)
                .map(function (index, slide) {
                  return slide.innerHTML;
                })
        );
    });
  }
});

module.exports = presenterStore;
