require("./presenter.less");
var React = require("react");
var Slide = require("../slide/slide.jsx");
var $ = require("jquery");

var Presenter = React.createClass({
  componentWillMount: function() {
    $("body").append($("<div id=\"rd-hidden-content\">"));
    $(this.props.domTemplate()).appendTo($("#rd-hidden-content"));
    this.setState({
      slides: $("#rd-hidden-content")
                .find(this.props.slideSelector)
                .map(function (index, slide) {
        return slide.innerHTML;
      })
    });
  },
  render: function() {
    var slideNodes = this.state.slides.map(function(html) {
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
