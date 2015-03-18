jest.dontMock("../src/components/presenter/presenter.jsx");
jest.dontMock("../src/components/presenter/presenterStore.js");
jest.dontMock("../src/reactor.js");

describe("Reactor -> Presenter", function() {
  var React = require("react/addons");
  var Presenter = require("../src/components/presenter/presenter.jsx");
  var TestUtils = React.addons.TestUtils;
  var reactor = require("../src/reactor.js");

  var presenter, reactor;
  beforeEach(function() {
    reactor.reset();
    presenter = TestUtils.renderIntoDocument(<Presenter />);
  });

  it("sets presenter mode when reactor processes toggle command", function() {
    // Expect the default state to be presentation
    expect(presenter.state.mode).toBe("presentation");

    // Now fire a change event on the reactor and verify that the presenter changes
    reactor.dispatch("toggleMode");
    // Check that the reactor state has changed
    expect(reactor.evaluate(["presenter", "mode"])).toBe("overview");
    // Verify the result
    expect(presenter.state.mode).toBe("overview");

    // Now fire a second change event and verify that the presenter changes back
    reactor.dispatch("toggleMode");
    expect(reactor.evaluate(["presenter", "mode"])).toBe("presentation");
    expect(presenter.state.mode).toBe("presentation");
  });

  it("sets presenter slide when reactor handles next/previous", function() {
    // Expect the default state to be 0 as per the reactor defaults
    expect(presenter.state.currentSlide).toBe(0);

    // Now fire/verify an event on the reactor and observe the reflection in the presenter
    reactor.dispatch("goNext");
    // Check that the reactor state has changed
    expect(reactor.evaluate(["presenter", "currentSlide"])).toBe(1);
    // Verify the result
    expect(presenter.state.currentSlide).toBe(1);

    // Now fire the opposite event and verify that the presenter changes back
    reactor.dispatch("goPrevious");
    expect(reactor.evaluate(["presenter", "currentSlide"])).toBe(0);
    expect(presenter.state.currentSlide).toBe(0);
  });
});
