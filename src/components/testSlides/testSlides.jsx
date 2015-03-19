var Presenter = require("../presenter/presenter.jsx");
var React = require("react");
var $ = require("jquery");
var reactor = require('../../reactor.js');
require("./testSlides.less");
var jadeContent = require("./testSlides.jade");

var createSlides = function() {
  return (
    <Presenter slideDom={jadeContent} userClass="test-slide"/>
  );
};

module.exports = createSlides;
