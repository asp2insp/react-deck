var Nuclear = require("nuclear-js");
var Immutable = require("immutable");

var presenterStore = Nuclear.Store({
  getInitialState: function() {
    return Immutable.Map({
      currentSlide: 0,
      mode: "presentation"
    });
  },

  initialize: function() {
    this.on("toggleMode", function(state) {
      var newMode = state.get("mode") === "presentation" ? "overview" : "presentation";
      return state.set("mode", newMode);
    });
    this.on("goPrevious", function(state) {
      var nextIndex = Math.max(state.get("currentSlide") - 1, 0);
      return state.set("currentSlide", nextIndex);
    });
    this.on("goNext", function(state) {
      var nextIndex = state.get("currentSlide") + 1;
      return state.set("currentSlide", nextIndex);
    });
  }
});



module.exports = presenterStore;
