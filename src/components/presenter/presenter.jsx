require("./presenter.less");
var React = require("react");
var Slide = require("../slide/slide.jsx");
var _ = require("lodash");
var reactor = require("../../reactor.js");
var presenterStore = require("./presenterStore.js");
var NuclearReactMixin = require("nuclear-react-mixin");

reactor.registerStores({
  presenter: presenterStore
});

var Presenter = React.createClass({
  mixins: [NuclearReactMixin(reactor)],
  // simply implement this function to keep a components state
  // in sync with a Nuclear Reactor
  getDataBindings: function() {
    return {
      currentSlide: ['presenter', 'currentSlide'],
      mode: ['presenter', 'mode']
    }
  },
  toggleMode: function() {
    reactor.dispatch("toggleMode");
  },
  goPrevious: function() {
    reactor.dispatch("goPrevious");
  },
  goNext: function() {
    reactor.dispatch("goNext");
  },
  render: function() {
    var currentSlideIndex = this.state.currentSlide;
    var userClass = this.props.userClass;
    var mode = this.state.mode;
    var nodes = []
    _.forEach(this.props.slides, function(html, index) {
      var isCurrentSlide = currentSlideIndex == index;
      nodes.push(
        <Slide markup={html} isCurrentSlide={isCurrentSlide} userClass={userClass} mode={mode} />
      );
    });
    return (
      <div className="presenter">
        <div className="slide-container">
          {nodes}
        </div>
        <div className="controls">
          <button type="button" onClick={this.goPrevious} >Previous</button>
          <button type="button" onClick={this.toggleMode} >Toggle Mode</button>
          <button type="button" onClick={this.goNext} >Next</button>
        </div>
      </div>
    );
  }
});

module.exports = Presenter;
