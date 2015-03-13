require("./presenter.less");
var React = require("react");
var Slide = require("../slide/slide.jsx");
var $ = require("jquery");
var Getter = require("nuclear-js").Getter;

var Presenter = React.createClass({
  render: function() {
    var slideNodes = this.props.slides.map(function(html) {
      return (<Slide markup={html} />);
    });
    return (
      <div className="slide-container">
        {slideNodes}
      </div>
    );
  }
});

module.exports = Presenter;
