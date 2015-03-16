jest.dontMock('../slide.jsx');

describe('Slide', function() {
  var React = require('react/addons');
  var Slide = require('../slide.jsx');
  var TestUtils = React.addons.TestUtils;

  it('only has base class when in presentation mode and is not the current slide', function() {
    // Render a slide in presentation mode that's not the current slide
    var slideInstance = TestUtils.renderIntoDocument(<Slide mode="presentation" isCurrentSlide={false} />);

    // Verify that the slide has the slide class, but not the fullscreen class or the mini class
    var slideDomElement = slideInstance.getDOMNode();
    expect(slideDomElement).toBeDefined();
    expect(slideDomElement.className).toEqual("slide");
  });

  it('has mini class when in overview mode', function() {
    // Render a slide in overview mode
    var slideInstance = TestUtils.renderIntoDocument(<Slide mode="overview" />);

    // Verify that the slide has the slide class and the mini class
    var slideDomElement = slideInstance.getDOMNode();
    expect(slideDomElement).toBeDefined();
    expect(slideDomElement.className).toEqual("slide mini");
  });

  it('contains the inner markup', function() {
    // Render a slide with inner markup
    var slideInstance = TestUtils.renderIntoDocument(<Slide markup="<p>Hello World!</p>" />);

    // Verify that the slide contains the markup once rendered
    var divs = TestUtils.scryRenderedDOMComponentsWithTag(
      slideInstance, 'div');
    expect(divs.length).toBe(2);

    var slideInnerElement = divs[1].getDOMNode();
    expect(slideInnerElement).toBeDefined();
    expect(slideInnerElement.innerHTML).toEqual("<p>Hello World!</p>");
  });

  it('applies the user defined class', function() {
    // Render a slide with user defined class
    var slideInstance = TestUtils.renderIntoDocument(<Slide userClass="fooClass" />);

    // Verify that the slide has the slide class and the user defined class
    var slideDomElement = slideInstance.getDOMNode();
    expect(slideDomElement).toBeDefined();
    expect(slideDomElement.className).toEqual("slide mini fooClass");
  });
});