var Presenter = require("../presenter/presenter.jsx");
var React = require("react");
var jadeContent = require("./testSlides.jade");
var $ = require("jquery");

var createSlides = function() {
  return React.createElement(Presenter, {
    rootSelector: "article",
    slideSelector: "section",
    domTemplate: jadeContent
  });
};


module.exports = createSlides;
