import React, { Component } from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

class Colors extends Component {
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
      codecopy7: "Copy"
    };
  }

  render() {
    let codeline = `
    <div class="text-red">This text is red, <a href="#" class="text-inherit">including the link</a></div>
    `;

    let codeline1 = `
  <div class="text-blue mb-2">
    .text-blue on white
  </div>
  <div class="text-gray-dark mb-2">
    .text-gray-dark on white
  </div>
  <div class="text-gray mb-2">
    .text-gray on white
  </div>
  <div class="text-gray-light mb-2">
    .text-gray-light on white
  </div>
  <div class="text-red mb-2">
    .text-red on white
  </div>
  <div class="text-yellow mb-2">
    .text-yellow on white
  </div>
    `;

    let codeline2 = `
  <div class="text-white bg-blue mb-2">
    .text-white on .bg-blue
  </div>
  <div class="bg-blue-light mb-2">
    .text-gray-dark on .bg-blue-light
  </div>
  <div class="text-white bg-red mb-2">
    .text-white on .bg-red
  </div>
  <div class="text-red bg-red-light mb-2">
    .text-red on .bg-red-light
  </div>
  <div class="bg-yellow-dark mb-2">
    .text-gray-dark on .bg-yellow-dark
  </div>
  <div class="bg-yellow mb-2">
    .text-gray-dark on .bg-yellow
  </div>
  <div class="bg-yellow-light mb-2">
    .text-gray-dark on .bg-yellow-light
  </div>
  <div class="text-white bg-gray-dark mb-2">
    .text-white on .bg-gray-dark
  </div>
  <div class="bg-gray">
    .text-gray-dark on .bg-gray
  </div>
    `;

    let codeline3 = `
  <div class="bg-gray-dark p-2">
    <span class="bg-white">.bg-white over .bg-gray-dark</span>
  </div>
    `;

    let codeline4 = `
    <a class="link-gray" href="#url">link-gray</a>
    `;

    let codeline5 = `
    <a class="link-gray-dark" href="#url">link-gray-dark</a>
    `;

    let codeline6 = `
    <a class="muted-link" href="#url">muted-link</a>
    `;

    let codeline7 = `
    <a class="text-gray-dark no-underline" href="#url">
      A link with only part of it is <span class="link-hover-blue">blue on hover</span>.
    </a>
    `;
    return (
      <div className="tuva-container">
        <div>
          <div className="tuva-line">
            <h1>Colors</h1>
            <span className="State bg-yellow float-left mt-4">Stable</span>
            <span className="Counter float-right mt-4">
              <a
                href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/colors.scss"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </span>
          </div>

          <section className="mt-6 pt-6 pl-6">
            <ul>
              <li>
                <a href="#background-colors">Background colors</a>
                <ul className="ml-4">
                  <li>
                    <a href="#background-utilities">Background utilities</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#text-colors">Text colors</a>
                <ul className="ml-4">
                  <li>
                    <a href="#text-color-inheritance">Text color inheritance</a>
                  </li>
                  <li>
                    <a href="#text-on-white-background">
                      Text on white background
                    </a>
                  </li>
                  <li>
                    <a href="#text-on-colored-backgrounds">
                      Text on colored backgrounds
                    </a>
                  </li>
                  <li>
                    <a href="#text-color-utilities">Text color utilities</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#white-background">White background</a>
              </li>
              <li>
                <a href="#link-colors">Link colors</a>
              </li>
              <li>
                <a href="#border-colors">Border colors</a>
              </li>
            </ul>
            <p className="mt-2">
              Use color utilities to apply color to the background of elements,
              text, and borders.
            </p>
          </section>

          <section id="background-colors" className="py-4">
            <h2 className="tuva-line">Background colors</h2>
            <p className="mt-2">
              Background colors are most commonly used for filling large blocks
              of content or areas with a color.
            </p>
            <h3 id="background-utilities">Background utilities</h3>
            <div className="my-1">
              <table className="width-full">
                <thead>
                  <tr>
                    <td>
                      <b>Class</b>
                    </td>
                    <td>
                      <b>Variable</b>
                    </td>
                    <td>
                      <b>Value</b>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>White</b>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="py-1 bg-white">.bg-white</td>
                    <td className="py-1 bg-white">$bg-white</td>
                    <td className="py-1 bg-white">#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Blue</b>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="py-1 bg-blue">.bg-blue</td>
                    <td className="py-1 bg-blue">$bg-blue</td>
                    <td className="py-1 bg-blue">#26aebc</td>
                  </tr>
                  <tr>
                    <td className="py-1 bg-blue-light">.bg-blue-light</td>
                    <td className="py-1 bg-blue-light">$bg-blue-light</td>
                    <td className="py-1 bg-blue-light">#A4DBE1</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Gray</b>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="py-1 bg-gray">.bg-gray</td>
                    <td className="py-1 bg-gray">$bg-gray</td>
                    <td className="py-1 bg-gray">#e4e7eb</td>
                  </tr>
                  <tr>
                    <td className="py-1 bg-gray-light">.bg-gray-light</td>
                    <td className="py-1 bg-gray-light">$bg-gray-light</td>
                    <td className="py-1 bg-gray-light">#edf2f7</td>
                  </tr>
                  <tr>
                    <td className="py-1 bg-gray-dark text-white">
                      .bg-gray-dark
                    </td>
                    <td className="py-1 bg-gray-dark text-white">
                      $bg-gray-dark
                    </td>
                    <td className="py-1 bg-gray-dark text-white">#3d4146</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Red</b>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="py-1 bg-red text-white">.bg-red</td>
                    <td className="py-1 bg-red text-white">$bg-red</td>
                    <td className="py-1 bg-red text-white">#EB0202</td>
                  </tr>
                  <tr>
                    <td className="py-1 bg-red-light">.bg-red-light</td>
                    <td className="py-1 bg-red-light">$bg-red-light</td>
                    <td className="py-1 bg-red-light">#FFA6A6</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Yellow</b>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="py-1 bg-yellow">.bg-yellow</td>
                    <td className="py-1 bg-yellow">$bg-yellow</td>
                    <td className="py-1 bg-yellow">#ECB806</td>
                  </tr>
                  <tr>
                    <td className="py-1 bg-yellow-light">.bg-yellow-light</td>
                    <td className="py-1 bg-yellow-light">$bg-yellow-light</td>
                    <td className="py-1 bg-yellow-light">#FBD968</td>
                  </tr>
                  <tr>
                    <td className="py-1 bg-yellow-dark text-white">
                      .bg-yellow-dark
                    </td>
                    <td className="py-1 bg-yellow-dark text-white">
                      $bg-yellow-dark
                    </td>
                    <td className="py-1 bg-yellow-dark text-white">#C89A00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section id="text-colors" className="py-4">
            <h2 className="tuva-line ">Text colors</h2>
            <p className="mt-2">
              Use text color utilities to set text the specific color.
            </p>
            <h3 id="text-color-inheritance" className="mt-2">
              Text color inheritance
            </h3>
            <p className="mt-2">
              You can set the color inheritance on an element by using the
              text-inherit class.
            </p>
            <div className="border">
              <div className="text-red p-2">
                This text is red,{" "}
                <a href="#" className="text-inherit">
                  including the link
                </a>
              </div>
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
                    codecopy7: "Copy"
                  });
                }}
              >
                {this.state.codecopy}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline}
              </SyntaxHighlighter>
            </div>
            <h3 id="text-on-white-background" className="mt-2">
              Text on white background
            </h3>
            <div className="border mt-2">
              <div className="p-2">
                <div className="text-blue mb-2">.text-blue on white</div>
                <div className="text-gray-dark mb-2">
                  .text-gray-dark on white
                </div>
                <div className="text-gray mb-2">.text-gray on white</div>
                <div className="text-gray-light mb-2">
                  .text-gray-light on white
                </div>
                <div className="text-red mb-2">.text-red on white</div>
                <div className="text-yellow mb-2">.text-yellow on white</div>
              </div>
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
                    codecopy7: "Copy"
                  });
                }}
              >
                {this.state.codecopy1}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline1}
              </SyntaxHighlighter>
            </div>
            <h3 id="text-on-colored-backgrounds" className="mt-2">
              Text on colored backgrounds
            </h3>
            <div className="border mt-2">
              <div className="p-2">
                <div className="text-white bg-blue mb-2">
                  .text-white on .bg-blue
                </div>
                <div className="bg-blue-light mb-2">
                  .text-gray-dark on .bg-blue-light
                </div>
                <div className="text-white bg-red mb-2">
                  .text-white on .bg-red
                </div>
                <div className="text-red bg-red-light mb-2">
                  .text-red on .bg-red-light
                </div>
                <div className="bg-yellow-dark mb-2">
                  .text-gray-dark on .bg-yellow-dark
                </div>
                <div className="bg-yellow mb-2">
                  .text-gray-dark on .bg-yellow
                </div>
                <div className="bg-yellow-light mb-2">
                  .text-gray-dark on .bg-yellow-light
                </div>
                <div className="text-white bg-gray-dark mb-2">
                  .text-white on .bg-gray-dark
                </div>
                <div className="bg-gray">.text-gray-dark on .bg-gray</div>
              </div>
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
                    codecopy7: "Copy"
                  });
                }}
              >
                {this.state.codecopy2}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline2}
              </SyntaxHighlighter>
            </div>
            <h3 id="text-color-utilities" className="mt-2">
              Text color utilities
            </h3>
            <div className="my-1">
              <table className="width-full">
                <thead>
                  <tr>
                    <td className="py-2">
                      <b>Class</b>
                    </td>
                    <td>
                      <b>Variable</b>
                    </td>
                    <td>
                      <b>Value</b>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Gray</b>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-light">.text-gray-light</td>
                    <td className="py-1 bg-gray-5">$gray-500</td>
                    <td className="py-1 bg-gray-5">#c5cad3</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray">.text-gray</td>
                    <td className="py-1 bg-gray-6">$gray-600</td>
                    <td className="py-1 bg-gray-6">#828890</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-dark">.text-gray-dark</td>
                    <td className="py-1 bg-gray-9 text-white">$gray-600</td>
                    <td className="py-1 bg-gray-9 text-white">#828890</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Gray</b>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="py-1 text-blue">.text-blue</td>
                    <td className="py-1 bg-blue">$blue-400</td>
                    <td className="py-1 bg-blue">#26aebc</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Red</b>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="py-1 text-red">.text-red</td>
                    <td className="py-1 bg-red text-white">$red-600</td>
                    <td className="py-1 bg-red text-white">#C10000</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Yellow</b>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="py-1 text-yellow">.text-yellow</td>
                    <td className="py-1 bg-yellow">$yellow-500</td>
                    <td className="py-1 bg-yellow">#ECB806</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section id="white-background" className="py-4">
            <h2 className="tuva-line">White background</h2>
            <p className="mt-2">
              You can make a background explicitly white (#fff) with the
              bg-white utility:
            </p>
            <div className="border mt-2">
              <div className="bg-gray-dark p-2">
                <span className="bg-white">.bg-white over .bg-gray-dark</span>
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
                    codecopy7: "Copy"
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
          <section id="link-colors" className="py-4">
            <h2 className="tuva-line">Link colors</h2>
            <p className="mt-2">
              Base link styles turn links blue and apply an underline on hover.
              You can override the base link styles with text color utilities
              and the following link utilities. Bear in mind that link styles
              are easier for more people to see and interact with when the
              changes in styles do not rely on color alone.
            </p>
            <p className="mt-2">
              Use link-gray to turn the link color to $text-gray and remain
              hover on blue.
            </p>
            <div className="border">
              <div className="py-2 px-4">
                <a className="link-gray p-2" href="#url">
                  link-gray
                </a>
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
                    codecopy7: "Copy"
                  });
                }}
              >
                {this.state.codecopy4}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline4}
              </SyntaxHighlighter>
            </div>
            <p className="mt-2">
              Use link-gray-dark to turn the link color to $text-gray-dark and
              remain hover on blue.
            </p>
            <div className="border">
              <div className="py-2 px-4">
                <a className="link-gray-dark" href="#url">
                  link-gray-dark
                </a>
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
                    codecopy7: "Copy"
                  });
                }}
              >
                {this.state.codecopy5}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline5}
              </SyntaxHighlighter>
            </div>
            <p className="mt-2">
              Use .muted-link to turn the link light gray in color, and blue on
              hover or focus with no underline.
            </p>
            <div className="border">
              <div className="py-2 px-4">
                <a className="muted-link" href="#url">
                  muted-link
                </a>
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
                    codecopy7: "Copy"
                  });
                }}
              >
                {this.state.codecopy6}
              </button>
              <SyntaxHighlighter language="html" style={docco}>
                {codeline6}
              </SyntaxHighlighter>
            </div>
            <p className="mt-2">
              Use link-hover-blue to make any text color used with links to turn
              blue on hover. This is useful when you want only part of a link to
              turn blue on hover.
            </p>
            <div className="border">
              <div className="py-2 px-4">
                <a className="text-gray-dark no-underline" href="#">
                  A link with only part of it is
                  <span className="link-hover-blue"> blue on hover</span>.
                </a>
              </div>
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
                    codecopy7: "Copied"
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
          <section id="border-colors" className="pt-4 pb-6">
            <h2 className="tuva-line">Border colors</h2>
            <p className="my-2">
              Border colors are documented on the
              <Link to="/utilities/border"> border utilities page</Link> .
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default Colors;
