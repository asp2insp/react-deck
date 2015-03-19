require("./presenter.less");
var React = require("react");
var Slide = require("../slide/slide.jsx");
var _ = require("lodash");
var reactor = require("../../reactor.js");
var presenterStore = require("./presenterStore.js");
var NuclearReactMixin = require("nuclear-react-mixin");
var cx = require("classnames");

reactor.registerStores({
  presenter: presenterStore
});

window.document.onkeydown = function(e) {
    if (e.keyCode === 39) {
      reactor.dispatch("goNext");
    } else if (e.keyCode === 37) {
      reactor.dispatch("goPrevious");
    } else if (e.keyCode === 38 || e.keyCode === 40) {
      reactor.dispatch("toggleMode");
    } else {
      return true;
    }
    return false;
  };

var Presenter = React.createClass({
  mixins: [NuclearReactMixin(reactor)],
  // simply implement this function to keep a components state
  // in sync with a Nuclear Reactor
  getDataBindings: function() {
    return {
      currentSlide: ['presenter', 'currentSlide'],
      mode: ['presenter', 'mode'],
      slides: ['presenter', 'slides']
    }
  },
  getInitialState: function() {
    reactor.dispatch("loadSlides", this.props.slideDom)
  },
  render: function() {
    var currentSlideIndex = this.state.currentSlide;
    var userClass = this.props.userClass;
    var mode = this.state.mode;
    var nodes = []
    _.forEach(this.state.slides, function(html, index) {
      var isCurrentSlide = currentSlideIndex == index;
      nodes.push(
        <Slide markup={html}
               isCurrentSlide={isCurrentSlide}
               userClass={userClass}
               mode={mode}
               index={index}
               key={index} />
      );
    });
    var containerClasses = cx({
      "slide-container": true,
      "presentation": mode === "presentation",
      "overview": mode === "overview"
    });
    return (
      <div className="presenter">
        <div className={containerClasses} >
          {nodes}
        </div>
      </div>
    );
  }
});

module.exports = Presenter;
