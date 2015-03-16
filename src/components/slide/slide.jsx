var React = require("react");
var cx = require("classnames");
require("./slide.less");

var Slide = React.createClass({
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
      <div className={classes} data-index={index}>
        <div dangerouslySetInnerHTML={{__html: slideInnerMarkup}}></div>
      </div>
    );
  },
});

module.exports = Slide;
