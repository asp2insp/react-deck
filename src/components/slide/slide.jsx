var React = require("react");
var cx = require("classnames");
require("./slide.less");
var reactor = require("../../reactor.js");

var Slide = React.createClass({
  onClick: function() {
    if (this.props.mode === "overview") {
      reactor.dispatch("setCurrentSlide", this.props.index);
      reactor.dispatch("toggleMode");
    }
  },
  render: function() {
    var isPresentationMode = this.props.mode == "presentation";
    var classObj = {
      "slide": true,
      "fullscreen": isPresentationMode && this.props.isCurrentSlide,
      "mini": !isPresentationMode,
      "current-slide": this.props.isCurrentSlide,
    }
    // Render the user class
    if (typeof this.props.userClass !== "undefined") {
      classObj[this.props.userClass] = true;
    }
    var classes = cx(classObj);
    var slideInnerMarkup = this.props.markup;
    var index = this.props.index;
    return (
      <div className={classes} data-index={index} onClick={this.onClick}>
        <div dangerouslySetInnerHTML={{__html: slideInnerMarkup}}></div>
      </div>
    );
  },
});

module.exports = Slide;
