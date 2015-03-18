jest.dontMock("../src/components/presenter/presenterStore.js");
jest.dontMock("../src/reactor.js");

describe("PresenterStore <-> Window Hash", function() {
  var React = require("react/addons");
  var TestUtils = React.addons.TestUtils;
  var reactor = require("../src/reactor.js");
  var store = require("../src/components/presenter/presenterStore.js");
  var Hash = store._hashImpl;
  Hash.getHash = jest.genMockFunction();
  Hash.setHash = jest.genMockFunction();

  var reactor;
  beforeEach(function() {
    store.handleReset();
    reactor.reset();
  });

  it("can read from the hash value", function() {
    // Inject data into the mock
    Hash.getHash
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(47);

    // The first time the store is initialized it should get 2
    reactor.registerStores({
      s: store
    });

    expect(reactor.evaluate(["s", "currentSlide"])).toBe(2);

    // Cause the initial state of the store to be re-evaluated. This time it should
    // get 5 as the hash
    reactor.reset();
    expect(reactor.evaluate(["s", "currentSlide"])).toBe(5);

    // Cause the initial state of the store to be re-evaluated. This time it should
    // get 47 as the hash
    reactor.reset();
    expect(reactor.evaluate(["s", "currentSlide"])).toBe(47);
  });
});