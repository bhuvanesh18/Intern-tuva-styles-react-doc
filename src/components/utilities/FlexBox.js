import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

class FlexBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codecopy: "Copy",
      codecopy1: "Copy",
      codecopy2: "Copy",
      codecopy3: "Copy",
      codecopy4: "Copy",
      codecopy5: "Copy",
      codecopy6: "Copy",
      codecopy7: "Copy",
      codecopy8: "Copy",
      codecopy9: "Copy",
      codecopy10: "Copy"
    };
  }

  render() {
    let codeline = `
    <div class="border">
    .border
    </div>
    `;

    let codeline1 = `
  <div class="d-flex mb-3">
  <div class="border-left col-3">
    .border-left
  </div>
  <div class="border-top col-3">
    .border-top
  </div>
  <div class="border-bottom col-3">
    .border-bottom
  </div>
  <div class="border-right col-3">
    .border-right
  </div>
  </div>
  <div class="border-x">
    .border-x
  </div>
  <div class="border-y">
    .border-y
  </div>
    `;

    let codeline2 = `
    <div class="Box border-top-0">
    .border-top-0
    </div>
    `;

    let codeline3 = `
  <div class="border border-blue mb-2">
    .border-blue
  </div>
  <div class="border border-blue-light mb-2">
    .border-blue-light
  </div>
  <div class="border border-red mb-2">
    .border-red
  </div>
  <div class="border border-red-light mb-2">
    .border-red-light
  </div>
  <div class="border border-yellow mb-2">
    .border-yellow
  </div>
  <div class="border border-gray-light mb-2">
    .border-gray-light
  </div>
  <div class="border border-gray-dark mb-2">
    .border-gray-dark
  </div>
    `;

    let codeline4 = `
    <div class="border border-black-fade bg-blue-light p-2 mb-2">
      .border-black-fade .bg-blue-light
    </div>
    <div class="border border-black-fade bg-red-light p-2 mb-2">
      .border-black-fade .bg-red-light
    </div>
    `;

    let codeline5 = `
    <div class="bg-gray-dark text-white p-3">
     <div class="border border-white-fade p-2">
       .border-white-fade
     </div>
    </div>
    `;

    let codeline6 = `
    <div class="bg-gray-dark text-white p-3 mb-3">
    <div class="border-bottom border-white-fade-15 p-2 mb-2">
      .border-white-fade-15
    </div>
    <div class="border-bottom border-white-fade-30 p-2 mb-2">
      .border-white-fade-30
    </div>
    <div class="border-bottom border-white-fade-50 p-2 mb-2">
      .border-white-fade-50
    </div>
    <div class="border-bottom border-white-fade-70 p-2 mb-2">
      .border-white-fade-70
    </div>
    <div class="border-bottom border-white-fade-85 p-2 mb-2">
      .border-white-fade-85
    </div>
  </div>
  <div class="bg-blue text-white p-3">
    <div class="border-bottom border-white-fade-15 p-2 mb-2">
      .border-white-fade-15
    </div>
    <div class="border-bottom border-white-fade-30 p-2 mb-2">
      .border-white-fade-30
    </div>
    <div class="border-bottom border-white-fade-50 p-2 mb-2">
      .border-white-fade-50
    </div>
    <div class="border-bottom border-white-fade-70 p-2 mb-2">
      .border-white-fade-70
    </div>
    <div class="border-bottom border-white-fade-85 p-2 mb-2">
      .border-white-fade-85
    </div>
  </div>
    `;

    let codeline7 = `
    <div class="border border-dashed p-2">
      .border-dashed
    </div>
    `;
    let codeline8 = `
<div class="Box rounded-0 mb-2">
  .rounded-0
</div>
<div class="border rounded-1 mb-2">
  .rounded-1
</div>
<div class="border rounded-2 mb-2">
  .rounded-2
</div>
<div class="border circle p-3" style="width: 100px; height: 100px;">
  .circle
</div>
    `;
    let codeline9 = `
  <div class="border rounded-top-1 mb-2">
    .rounded-top-1
  </div>
  <div class="border rounded-right-1 mb-2">
    .rounded-right-1
  </div>
  <div class="border rounded-bottom-1 mb-2">
    .rounded-bottom-1
  </div>
  <div class="border rounded-left-1 mb-2">
    .rounded-left-1
  </div>
    `;
    let codeline10 = `
<div class="border-top border-sm-right border-md-bottom border-md-top-0">
  .border-top
  <span class="d-none d-sm-inline">.border-sm-right </span>
  <span class="d-none d-md-inline">.border-md-bottom </span>
  <span class="d-none d-lg-inline">.border-md-top-0 </span>
</div>
    `;
    return (
      <div className="tuva-container">
        <div>
          <div className="tuva-line">
            <h1>FlexBox</h1>
            <span className="State bg-yellow float-left mt-4">Stable</span>
            <span className="Counter float-right mt-4">
              <a
                href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/flexbox.scss"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </span>
          </div>

          <section className="mt-6 pt-6 pl-6">
            <ul>
              <li className="mt-1">
                <a href="#flex-container">Flex container</a>
                <ul className="ml-6 mt-1">
                  <li className="mt-1">
                    <a href="#css">CSS</a>
                  </li>
                  <li className="mt-1">
                    <a href="#classes">Classes</a>
                  </li>
                  <li className="mt-1">
                    <a href="#example-using-d-flex">Example using .d-flex</a>
                  </li>
                  <li className="mt-1">
                    <a href="#example-using-d-inline-flex">Example using .d-inline-flex</a>
                  </li>
                </ul>
              </li>
              <li className="mt-1">
                <a href="#flex-direction">Flex direction</a>
                <ul className="ml-6 mt-1">
                  <li className="mt-1">
                    <a href="#css-1">CSS</a>
                  </li>
                  <li className="mt-1">
                    <a href="#classes-1">Classes</a>
                  </li>
                  <li className="mt-1">
                    <a href="#example-using-flex-column">Example using .flex-column</a>
                  </li>
                  <li className="mt-1">
                    <a href="#example-using-flex-column-reverse">Example using .flex-column-reverse</a>
                  </li>
                  <li className="mt-1">
                    <a href="#example-using-flex-row">Example using .flex-row</a>
                  </li>
                  <li className="mt-1">
                    <a href="#example-using-flex-row-reverse">Example using .flex-row-reverse</a>
                  </li>
                </ul>
              </li>
              <li className="mt-1">
                <a href="#flex-wrap">Flex wrap</a>
                <ul className="ml-6 mt-1">
                  <li className="mt-1">
                    <a href="#css-2">CSS</a>
                  </li>
                  <li className="mt-1">
                    <a href="#classes-2">Classes</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-wrap-example">flex-wrap example</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-nowrap example">flex-wrap example</a>
                  </li>
                </ul>
              </li>
              <li className="mt-1">
                <a href="#justify-content">Justify content</a>
                <ul className="ml-6 mt-1">
                  <li className="mt-1">
                    <a href="#css-3">CSS</a>
                  </li>
                  <li className="mt-1">
                    <a href="#classes-3">Classes</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-justify-start">flex-justify-start</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-justify-end">flex-justify-end</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-justify-center">flex-justify-center</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-justify-between">flex-justify-between</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-justify-around">flex-justify-around</a>
                  </li>
                </ul>
              </li>
              <li className="mt-1">
                <a href="#align-items">Align items</a>
                <ul className="ml-6 mt-1">
                  <li className="mt-1">
                    <a href="#css-4">CSS</a>
                  </li>
                  <li className="mt-1">
                    <a href="#classes-4">Classes</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-items-start">flex-items-start</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-items-end">flex-items-end</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-items-center">flex-items-center</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-items-baseline">flex-items-baseline</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-items-stretch">flex-items-stretch</a>
                  </li>
                </ul>
              </li>
              <li className="mt-1">
                <a href="#align-content">Align content</a>
                <ul className="ml-6 mt-1">
                  <li className="mt-1">
                    <a href="#css-5">CSS</a>
                  </li>
                  <li className="mt-1">
                    <a href="#classes-5">Classes</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-content-start">flex-content-start</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-content-end">flex-content-end</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-content-center">flex-content-center</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-content-between">flex-content-between</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-content-around">flex-content-around</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-content-stretch">flex-content-stretch</a>
                  </li>
                </ul>
              </li>
              <li className="mt-1">
                <a href="#flex">Flex</a>
                <ul className="ml-6 mt-1">
                  <li className="mt-1">
                    <a href="#flex-1">flex-1</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-auto">flex-auto</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-grow-0">flex-grow 0</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-shrink-0">flex-shrink 0</a>
                  </li>
                </ul>
              </li>
              <li className="mt-1">
                <a href="#align-self">Align self</a>
                <ul className="ml-6 mt-1">
                  <li className="mt-1">
                    <a href="#css-6">CSS</a>
                  </li>
                  <li className="mt-1">
                    <a href="#classes-6">Classes</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-self-auto">flex-self-auto</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-self-start">flex-self-start</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-self-end">flex-self-end</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-self-center">flex-self-center</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-self-baseline">flex-self-baseline</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-self-stretch">flex-self-stretch</a>
                  </li>
                </ul>
              </li>
              <li className="mt-1">
                <a href="#order">Order</a>
                <ul className="ml-6 mt-1">
                  <li className="mt-1">
                    <a href="#css-7">CSS</a>
                  </li>
                  <li className="mt-1">
                    <a href="#classes-7">Classes</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-order-12">flex-order (1+2)</a>
                  </li>
                  <li className="mt-1">
                    <a href="#flex-order-none">flex-order-none</a>
                  </li>
                </ul>
              </li>
              <li className="mt-1">
                <a href="#responsive-flex-utilities">Responsive flex utilities</a>
                <ul className="ml-6 mt-1">
                  <li className="mt-1">
                    <a href="#example-classes">Example classes</a>
                  </li>
                  <li className="mt-1">
                    <a href="#example-usage">Example usage</a>
                  </li>
                </ul>
              </li>
              <li className="mt-1">
                <a href="#example-components">Example components</a>
                <ul className="ml-6 mt-1">
                  <li className="mt-1">
                    <a href="#media-object">Media object</a>
                  </li>
                  <li className="mt-1">
                    <a href="#responsive-media-object">Responsive media object</a>
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="default-border" className="py-4">
            <h2 className="tuva-line">Default Border</h2>
            <p>
              The default border utility applies a solid, 1px border, with a
              default gray color.
            </p>
            <div className="border">
              <div className="border">.border</div>
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline);
                  this.setState({
                    codecopy: "Copied",
                    codecopy1: "Copy",
                    codecopy2: "Copy",
                    codecopy3: "Copy",
                    codecopy4: "Copy",
                    codecopy5: "Copy",
                    codecopy6: "Copy",
                    codecopy7: "Copy",
                    codecopy8: "Copy",
                    codecopy9: "Copy",
                    codecopy10: "Copy"
                  });
                }}
              >
                {this.state.codecopy}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline}
              </SyntaxHighlighter>
            </div>

            <p>
              Borders can be applied to a specific edge or to the X and Y axes
              individually:
            </p>
            <div className="border p-2">
              <div className="d-flex mb-3">
                <div className="border-left col-3">.border-left</div>
                <div className="border-top col-3">.border-top</div>
                <div className="border-bottom col-3">.border-bottom</div>
                <div className="border-right col-3">.border-right</div>
              </div>
              <div className="border-x">.border-x</div>
              <div className="border-y">.border-y</div>
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline1);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copied",
                    codecopy2: "Copy",
                    codecopy3: "Copy",
                    codecopy4: "Copy",
                    codecopy5: "Copy",
                    codecopy6: "Copy",
                    codecopy7: "Copy",
                    codecopy8: "Copy",
                    codecopy9: "Copy",
                    codecopy10: "Copy"
                  });
                }}
              >
                {this.state.codecopy1}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline1}
              </SyntaxHighlighter>
            </div>

            <p>
              Remove borders from all sides or a single side with .border-0,
              .border-top-0, .border-right-0, .border-bottom-0, .border-left-0.
            </p>
            <div className="border p-2">
              <div className="Box border-top-0">.border-top-0</div>
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline2);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copy",
                    codecopy2: "Copied",
                    codecopy3: "Copy",
                    codecopy4: "Copy",
                    codecopy5: "Copy",
                    codecopy6: "Copy",
                    codecopy7: "Copy",
                    codecopy8: "Copy",
                    codecopy9: "Copy",
                    codecopy10: "Copy"
                  });
                }}
              >
                {this.state.codecopy2}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline2}
              </SyntaxHighlighter>
            </div>
          </section>
          <section id="border-colors" className="py-4">
            <h2 className="tuva-line">Border colors</h2>
            <p>
              Override default border colors with blue, red, yellow, and gray
              border color utilities.
            </p>
            <div className="border p-2">
              <div className="border border-blue mb-2">.border-blue</div>
              <div className="border border-blue-light mb-2">
                .border-blue-light
              </div>
              <div className="border border-red mb-2">.border-red</div>
              <div className="border border-red-light mb-2">
                .border-red-light
              </div>
              <div className="border border-yellow mb-2">.border-yellow</div>
              <div className="border border-gray-light mb-2">
                .border-gray-light
              </div>
              <div className="border border-gray-dark mb-2">
                .border-gray-dark
              </div>
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline3);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copy",
                    codecopy2: "Copy",
                    codecopy3: "Copied",
                    codecopy4: "Copy",
                    codecopy5: "Copy",
                    codecopy6: "Copy",
                    codecopy7: "Copy",
                    codecopy8: "Copy",
                    codecopy9: "Copy",
                    codecopy10: "Copy"
                  });
                }}
              >
                {this.state.codecopy3}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline3}
              </SyntaxHighlighter>
            </div>
          </section>
          <section id="borders-with-alpha-transparency" className="py-4">
            <h2 className="tuva-line">Borders with alpha transparency</h2>
            <p>
              Use border-black-fade to add an rgba black border with an alpha
              transparency of 0.15. This is useful when you want a border that
              tints the background color. The shade of black we use matches the
              hue of the GitHub dark header and our gray color palette:
              rgba(27,31,35, 0.15).
            </p>
            <div className="border p-2">
              <div className="border border-black-fade bg-blue-light p-2 mb-2">
                .border-black-fade .bg-blue-light
              </div>
              <div className="border border-black-fade bg-red-light p-2 mb-2">
                .border-black-fade .bg-red-light
              </div>
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline4);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copy",
                    codecopy2: "Copy",
                    codecopy3: "Copy",
                    codecopy4: "Copied",
                    codecopy5: "Copy",
                    codecopy6: "Copy",
                    codecopy7: "Copy",
                    codecopy8: "Copy",
                    codecopy9: "Copy",
                    codecopy10: "Copy"
                  });
                }}
              >
                {this.state.codecopy4}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline4}
              </SyntaxHighlighter>
            </div>
            <p>
              On dark backgrounds use border-white-fade instead. It adds an rgba
              white border with an alpha transparency of 0.15.
            </p>
            <div className="border">
              <div className="bg-gray-dark text-white p-3">
                <div className="border border-white-fade p-2">
                  .border-white-fade
                </div>
              </div>
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline5);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copy",
                    codecopy2: "Copy",
                    codecopy3: "Copy",
                    codecopy4: "Copy",
                    codecopy5: "Copied",
                    codecopy6: "Copy",
                    codecopy7: "Copy",
                    codecopy8: "Copy",
                    codecopy9: "Copy",
                    codecopy10: "Copy"
                  });
                }}
              >
                {this.state.codecopy5}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline5}
              </SyntaxHighlighter>
            </div>
            <p>
              Use .border-white-fade-xx to add a white border with various
              levels of alpha transparency.
            </p>
            <div className="border p-2">
              <div className="bg-gray-dark text-white p-3 mb-3">
                <div className="border-bottom border-white-fade-15 p-2 mb-2">
                  .border-white-fade-15
                </div>
                <div className="border-bottom border-white-fade-30 p-2 mb-2">
                  .border-white-fade-30
                </div>
                <div className="border-bottom border-white-fade-50 p-2 mb-2">
                  .border-white-fade-50
                </div>
                <div className="border-bottom border-white-fade-70 p-2 mb-2">
                  .border-white-fade-70
                </div>
                <div className="border-bottom border-white-fade-85 p-2 mb-2">
                  .border-white-fade-85
                </div>
              </div>
              <div className="bg-blue text-white p-3">
                <div className="border-bottom border-white-fade-15 p-2 mb-2">
                  .border-white-fade-15
                </div>
                <div className="border-bottom border-white-fade-30 p-2 mb-2">
                  .border-white-fade-30
                </div>
                <div className="border-bottom border-white-fade-50 p-2 mb-2">
                  .border-white-fade-50
                </div>
                <div className="border-bottom border-white-fade-70 p-2 mb-2">
                  .border-white-fade-70
                </div>
                <div className="border-bottom border-white-fade-85 p-2 mb-2">
                  .border-white-fade-85
                </div>
              </div>
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline6);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copy",
                    codecopy2: "Copy",
                    codecopy3: "Copy",
                    codecopy4: "Copy",
                    codecopy5: "Copy",
                    codecopy6: "Copied",
                    codecopy7: "Copy",
                    codecopy8: "Copy",
                    codecopy9: "Copy",
                    codecopy10: "Copy"
                  });
                }}
              >
                {this.state.codecopy6}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline6}
              </SyntaxHighlighter>
            </div>
          </section>
          <section id="border-style" className="py-4">
            <h2 className="tuva-line">Border style</h2>
            <p>Use border-dashed to give an element a dashed border.</p>
            <div className="border p-2">
              <div className="border border-dashed p-2">.border-dashed</div>
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline7);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copy",
                    codecopy2: "Copy",
                    codecopy3: "Copy",
                    codecopy4: "Copy",
                    codecopy5: "Copy",
                    codecopy6: "Copy",
                    codecopy7: "Copied",
                    codecopy8: "Copy",
                    codecopy9: "Copy",
                    codecopy10: "Copy"
                  });
                }}
              >
                {this.state.codecopy7}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline7}
              </SyntaxHighlighter>
            </div>
          </section>
          <section id="rounded-corners" className="py-4">
            <h2 className="tuva-line">Rounded corners</h2>
            <p>
              Use the following utilities to add or remove rounded corners:
              rounded-0 removes rounded corners, rounded-1 applies a border
              radius of 3px, rounded-2 applies a border radius of 6px. .circle
              applies a border radius of 50%, which turns square elements into
              perfect circles.
            </p>
            <div className="border p-2">
              <div className="Box rounded-0 mb-2">.rounded-0</div>
              <div className="border rounded-1 mb-2">.rounded-1</div>
              <div className="border rounded-2 mb-2">.rounded-2</div>
              <div
                className="border circle p-3"
                style={{ width: "100px", height: "100px" }}
              >
                .circle
              </div>
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline8);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copy",
                    codecopy2: "Copy",
                    codecopy3: "Copy",
                    codecopy4: "Copy",
                    codecopy5: "Copy",
                    codecopy6: "Copy",
                    codecopy7: "Copy",
                    codecopy8: "Copied",
                    codecopy9: "Copy",
                    codecopy10: "Copy"
                  });
                }}
              >
                {this.state.codecopy8}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline8}
              </SyntaxHighlighter>
            </div>
            <p>
              You can also add rounded corners to each edge (top, right, bottom,
              left) with the following utilities:
            </p>
            <div className="border p-2">
              <div className="border rounded-top-1 mb-2">.rounded-top-1</div>
              <div className="border rounded-right-1 mb-2">
                .rounded-right-1
              </div>
              <div className="border rounded-bottom-1 mb-2">
                .rounded-bottom-1
              </div>
              <div className="border rounded-left-1 mb-2">.rounded-left-1</div>
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline9);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copy",
                    codecopy2: "Copy",
                    codecopy3: "Copy",
                    codecopy4: "Copy",
                    codecopy5: "Copy",
                    codecopy6: "Copy",
                    codecopy7: "Copy",
                    codecopy8: "Copy",
                    codecopy9: "Copied",
                    codecopy10: "Copy"
                  });
                }}
              >
                {this.state.codecopy9}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline9}
              </SyntaxHighlighter>
            </div>
          </section>
          <section id="responsive-borders" className="py-4">
            <h2 className="tuva-line">Responsive borders</h2>
            <p>
              You can adjust border widths on all sides or each side
              individually with responsive border utilities:
              <ul className="ml-6">
                <li className="mt-1">
                  border-(sm|md|lg|xl) adds borders on all sides at and above
                  the breakpoint. The border-(sm|md|lg|xl) shorthand is also
                  supported.
                </li>
                <li className="mt-1">
                  border-(sm|md|lg|xl)-0 removes borders from all sides at and
                  above the breakpoint.
                </li>
                <li className="mt-1">
                  border-(sm|md|lg|xl)-(top|right|bottom|left) adds a border on
                  the given side at and above the breakpoint.
                </li>
                <li className="mt-1">
                  border-(sm|md|lg|xl)-(top|right|bottom|left)-0 the border from
                  the given side at and above the breakpoint.
                </li>
              </ul>
            </p>
            <div className="border p-2">
              <div className="border-top border-sm-right border-md-bottom border-md-top-0">
                .border-top
                <span className="d-none d-sm-inline">.border-sm-right </span>
                <span className="d-none d-md-inline">.border-md-bottom </span>
                <span className="d-none d-lg-inline">.border-md-top-0 </span>
              </div>
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline10);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copy",
                    codecopy2: "Copy",
                    codecopy3: "Copy",
                    codecopy4: "Copy",
                    codecopy5: "Copy",
                    codecopy6: "Copy",
                    codecopy7: "Copy",
                    codecopy8: "Copy",
                    codecopy9: "Copy",
                    codecopy10: "Copied"
                  });
                }}
              >
                {this.state.codecopy10}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline10}
              </SyntaxHighlighter>
            </div>
          </section>
          <section id="border-color-utilities" className="py-4">
            <h2 className="tuva-line mt-2">Border color utilities</h2>
            <table className="mt-2 py-2">
              <thead>
                <tr>
                  <th className="py-3 px-6">Class</th>
                  <th className="py-3 px-6">Variable</th>
                  <th className="py-3 px-6">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 px-6">.border-blue</td>
                  <td
                    className="py-3 px-6 text-white"
                    style={{ backgroundColor: "#268c97" }}
                  >
                    $border-blue
                  </td>
                  <td
                    className="py-3 px-6 text-white"
                    style={{ backgroundColor: "#268c97" }}
                  >
                    #268c97
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-6">.border-blue-light</td>
                  <td
                    className="py-3 px-6"
                    style={{ backgroundColor: "#7fcbd4" }}
                  >
                    $border-blue-light
                  </td>
                  <td
                    className="py-3 px-6"
                    style={{ backgroundColor: "#7fcbd4" }}
                  >
                    #7fcbd4
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-6">.border-red</td>
                  <td
                    className="py-3 px-6 text-white"
                    style={{ backgroundColor: "#c10000" }}
                  >
                    $border-red
                  </td>
                  <td
                    className="py-3 px-6 text-white"
                    style={{ backgroundColor: "#c10000" }}
                  >
                    #c10000
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-6">.border-red-light</td>
                  <td
                    className="py-3 px-6 text-white"
                    style={{ backgroundColor: "#db6f6f" }}
                  >
                    $border-red-light
                  </td>
                  <td
                    className="py-3 px-6 text-white"
                    style={{ backgroundColor: "#db6f6f" }}
                  >
                    #db6f6f
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-6">.border-yellow</td>
                  <td
                    className="py-3 px-6 text-white"
                    style={{ backgroundColor: "#d7bc61" }}
                  >
                    $border-yellow
                  </td>
                  <td
                    className="py-3 px-6 text-white"
                    style={{ backgroundColor: "#d7bc61" }}
                  >
                    #d7bc61
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-6">.border-gray-ligth</td>
                  <td
                    className="py-3 px-6"
                    style={{ backgroundColor: "#eceef1" }}
                  >
                    $border-gray-light
                  </td>
                  <td
                    className="py-3 px-6"
                    style={{ backgroundColor: "#eceef1" }}
                  >
                    #eceef1
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-6">.border-gray-dark</td>
                  <td
                    className="py-3 px-6"
                    style={{ backgroundColor: "#c5cad3" }}
                  >
                    $border-gray-dark
                  </td>
                  <td
                    className="py-3 px-6"
                    style={{ backgroundColor: "#c5cad3" }}
                  >
                    #c5cad3
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-6">.border-white</td>
                  <td
                    className="py-3 px-6"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    $border-white
                  </td>
                  <td
                    className="py-3 px-6"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    #ffffff
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
}

export default FlexBox;
