require("./presenter.less");
var React = require("react");
var Slide = require("../slide/slide.jsx");
var _ = require("lodash");

var Presenter = React.createClass({
  render: function() {
    var nodes = []
    _.forEach(this.props.slides, function(html) {
      nodes.push(<Slide markup={html} />);
    });
    return (
      <div className="slide-container">
        {nodes}
      </div>
    );
  }
});

module.exports = Presenter;
