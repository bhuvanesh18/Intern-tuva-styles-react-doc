import React, { Component } from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

class Typography extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codecopy: "Copy",
      codecopy1: "Copy",
      codecopy2: "Copy"
    };
  }

  render() {
    let codeline = `
    // Heading sizes - mobile
    $h0-size-mobile: 46px !default;
    $h1-size-mobile: 40px !default;
    $h2-size-mobile: 28px !default;
    $h3-size-mobile: 22px !default;

    // Heading sizes - desktop
    $h0-size: 54px !default;
    $h1-size: 46px !default;
    $h2-size: 30px !default;
    $h3-size: 24px !default;
    $h4-size: 20px !default;
    $h5-size: 18px !default;
    $h6-size: 16px !default;
    `;

    let codeline1 = `
    // Font weights
    $font-weight-black: 900 !default;
    $font-weight-bold: 700 !default;
    $font-weight-semibold: 600 !default;
    $font-weight-medium: 500 !default;
    $font-weight-normal: 400 !default;
    $font-weight-light: 300 !default;
    `;

    let codeline2 = `
    // Line heights
    $lh-condensed-ultra: 1 !default;
    $lh-condensed: 1.25 !default;
    $lh-default: 1.5 !default;
    `;

    return (
      <div className="tuva-container">
        <div>
          <div className="tuva-line">
            <h1>Typography</h1>
            <span className="State bg-yellow float-left mt-4">Stable</span>
            <span className="Counter float-right mt-4">
              <a href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/typography.scss">
                View Source
              </a>
            </span>
          </div>

          <section className="mt-6 pt-6 pl-6">
            <ul>
              <li>
                <a href="#type-scale">Type Scale</a>
              </li>
              <li>
                <a href="#typography-variables">Typography variables</a>
                <ul className="ml-4">
                  <li>
                    <a href="#font-size-variables">Font size variables</a>
                  </li>
                  <li>
                    <a href="#font-weight-variables">Font weight variables</a>
                  </li>
                  <li>
                    <a href="#line-height-variables">Line height variables</a>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section id="type-scale" className="mt-4">
            <h2 className="tuva-line">Type scale</h2>
            <p className="mt-4">
              The typography scale is designed to work for Tuva product UI. Font
              sizes are designed to work in combination with line-height values
              so as to result in more sensible numbers wherever possible.
            </p>
            <p className="mt-4">
              Font sizes are smaller on mobile and scale up at the md
              <Link to="/support/breakpoints"> breakpoint </Link>
              to be larger on desktop.
            </p>
            <table className="border mt-3">
              <thead>
                <tr>
                  <th className="border py-2 px-3">Scale</th>
                  <th className="border py-2 px-3">Font size: mobile</th>
                  <th className="border py-2 px-3">Font size: desktop</th>
                  <th className="border py-2 px-3">1.25 line height</th>
                  <th className="border py-2 px-3">1.5 line height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-3">0</td>
                  <td className="border py-2 px-3">46px</td>
                  <td className="border py-2 px-3">54px</td>
                  <td className="border py-2 px-3">60</td>
                  <td className="border py-2 px-3">72</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">1</td>
                  <td className="border py-2 px-3">40px</td>
                  <td className="border py-2 px-3">46px</td>
                  <td className="border py-2 px-3">50</td>
                  <td className="border py-2 px-3">60</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">2</td>
                  <td className="border py-2 px-3">28px</td>
                  <td className="border py-2 px-3">30px</td>
                  <td className="border py-2 px-3">40</td>
                  <td className="border py-2 px-3">48</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">3</td>
                  <td className="border py-2 px-3">22px</td>
                  <td className="border py-2 px-3">24px</td>
                  <td className="border py-2 px-3">30</td>
                  <td className="border py-2 px-3">36</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">4</td>
                  <td className="border py-2 px-3">16px</td>
                  <td className="border py-2 px-3">20px</td>
                  <td className="border py-2 px-3">20</td>
                  <td className="border py-2 px-3">24</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">5</td>
                  <td className="border py-2 px-3">14px</td>
                  <td className="border py-2 px-3">18px</td>
                  <td className="border py-2 px-3">17.5</td>
                  <td className="border py-2 px-3">21</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">6</td>
                  <td className="border py-2 px-3">12px</td>
                  <td className="border py-2 px-3">16px</td>
                  <td className="border py-2 px-3">15</td>
                  <td className="border py-2 px-3">18</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4">
              The typography scale is used to create
              <Link to="/utilities/typography"> typography utilities </Link>.
            </p>
          </section>

          <section id="typography-variables" className="py-4">
            <h2 className="tuva-line">Typography variables</h2>
          </section>
          <section id="font-size-variables" className="mt-1">
            <h3>Font size variables</h3>
            <div className="border mt-2">
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline);
                  this.setState({
                    codecopy: "Copied",
                    codecopy1: "Copy",
                    codecopy2: "Copy"
                  });
                }}
              >
                {this.state.codecopy}
              </button>
              <SyntaxHighlighter language="scss" style={docco}>
                {codeline}
              </SyntaxHighlighter>
            </div>
          </section>

          <section id="font-weight-variables" className="mt-2">
            <h3>Font weight variables</h3>
            <div className="border mt-2">
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline1);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copied",
                    codecopy2: "Copy"
                  });
                }}
              >
                {this.state.codecopy1}
              </button>
              <SyntaxHighlighter language="scss" style={docco}>
                {codeline1}
              </SyntaxHighlighter>
            </div>
          </section>
          <section id="line-height-variables" className="mt-2 pb-5">
            <h3>Line height variables</h3>
            <div className="border mt-2">
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline2);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copy",
                    codecopy2: "Copied"
                  });
                }}
              >
                {this.state.codecopy2}
              </button>
              <SyntaxHighlighter language="scss" style={docco}>
                {codeline2}
              </SyntaxHighlighter>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Typography;
