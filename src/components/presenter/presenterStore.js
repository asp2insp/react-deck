var Nuclear = require("nuclear-js");
var Immutable = require("immutable");

var presenterStore = Nuclear.Store({
  getInitialState: function() {
    var hash = window.location.hash;
    if (hash.length > 1) {
      hash = parseInt(hash.substr(1));
    } else {
      hash = 0;
    }
    return Immutable.Map({
      currentSlide: hash,
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
      window.location.hash = "#" + nextIndex;
      return state.set("currentSlide", nextIndex);
    });
    this.on("goNext", function(state) {
      var nextIndex = state.get("currentSlide") + 1;
      window.location.hash = "#" + nextIndex;
      return state.set("currentSlide", nextIndex);
    });
    this.on("setCurrentSlide", function(state, input) {
      window.location.hash = "#" + input;
      return state.set("currentSlide", input);
    });
  }
});



module.exports = presenterStore;
