var Presenter = require("../presenter/presenter.jsx");
var React = require("react");
var $ = require("jquery");
var reactor = require('../../reactor.js');
var Getter = require('nuclear-js').Getter

var getSlides = Getter('slides', slidesMap => {
  return slidesMap.slides;
});

var createSlides = function() {
  var slides = reactor.get(getSlides);
  return (
    <Presenter slides={slides} />
  );
};


module.exports = createSlides;
