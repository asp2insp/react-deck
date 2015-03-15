var Presenter = require("../presenter/presenter.jsx");
var React = require("react");
var $ = require("jquery");
var reactor = require('../../reactor.js');
var testSlidesStore = require("./testSlidesStore.js");
require("./testSlides.less");

reactor.registerStores({
  slides: testSlidesStore
});

var getSlides = ['slides', 'slides'];

var createSlides = function() {
  var slides = reactor.evaluate(getSlides);
  return (
    <Presenter slides={slides} userClass="test-slide"/>
  );
};


module.exports = createSlides;
