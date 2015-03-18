var Nuclear = require("nuclear-js");
var Immutable = require("immutable");
var Hash = require("../hash/hash.js");

var presenterStore = Nuclear.Store({
  _hashImpl: Hash,
  getInitialState: function() {
    var hashString = this._hashImpl.getHash() || 0;
    return Immutable.Map({
      currentSlide: parseInt(hashString),
      mode: "presentation"
    });
  },

  initialize: function() {
    var self = this;
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
      var nextIndex = state.get("currentSlide") + 1;
      self._hashImpl.setHash(nextIndex);
      return state.set("currentSlide", nextIndex);
    });
    this.on("setCurrentSlide", function(state, input) {
      self._hashImpl.setHash(input);
      return state.set("currentSlide", input);
    });
  }
});

module.exports = presenterStore;
