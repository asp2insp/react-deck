var React = require("react");
require("./slide.less");

var Slide = React.createClass({
  render: function() {
    var slideInnerMarkup = this.props.markup;
    return (
      <div className="slide">
        <div dangerouslySetInnerHTML={{__html: slideInnerMarkup}}></div>
      </div>
    );
  }
});

module.exports = Slide;
