import React, { Component } from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

class Breakpoints extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codecopy: "Copy",
      codecopy1: "Copy",
      codecopy2: "Copy",
      codecopy3: "Copy"
    };
  }

  render() {
    let codeline = `
    // Breakpoint widths
    $width-xs: 0 !default;
    // Small screen / phone
    $width-sm: 544px !default;
    // Medium screen / tablet
    $width-md: 768px !default;
    // Large screen / desktop (980 + (16 * 2)) <= container + gutters
    $width-lg: 1012px !default;
    // Extra large screen / wide desktop
    $width-xl: 1280px !default;

    // Responsive container widths
    $container-sm: $width-sm !default;
    $container-md: $width-md !default;
    $container-lg: $width-lg !default;
    $container-xl: $width-xl !default;
    `;

    let codeline1 = `
    .styles {
      font-size: 28px;
      @include breakpoint(md) {
        font-size: 32px;
      }
    }
    `;

    let codeline2 = `
    @each $breakpoint, $variant in $responsive-variants {
      @include breakpoint($breakpoint) {
        // Note: the first iteration gets '$variant == ""'
        .overflow#{$variant}-auto {
          overflow: auto;
        }
      }
    }
    `;

    let codeline3 = `
    .overflow-auto {
      overflow: auto;
    }
    @media (min-width: 544px) {
      .overflow-sm-auto {
        overflow: auto;
      }
    }
    @media (min-width: 768px) {
      .overflow-md-auto {
        overflow: auto;
      }
    }
    @media (min-width: 1012px) {
      .overflow-lg-auto {
        overflow: auto;
      }
    }
    @media (min-width: 1280px) {
      .overflow-xl-auto {
        overflow: auto;
      }
    }
    `;
    return (
      <div className="tuva-container">
        <div>
          <div className="tuva-line">
            <h1>Breakpoints</h1>
            <span className="State bg-yellow float-left mt-4">Stable</span>
            <span className="Counter float-right mt-4">
              <a href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/mixins/layout.scss">
                View Source
              </a>
            </span>
          </div>

          <section className="mt-6 pt-6 pl-6">
            <ul>
              <li>
                <a href="#breakpoints-variables">Breakpoint variables</a>
              </li>
              <li>
                <a href="#mediaquery-mixins">Media query-Mixins</a>
              </li>
              <li>
                <a href="#responsive-varients">Responsive varients</a>
              </li>
            </ul>
            <p className="mt-2">
              Our breakpoints are based on screen widths where our content
              starts to break. Since most of GitHub is currently a fixed-width
              with we use pixel widths to make it easy for us to match page
              widths for responsive and non-responsive pages.
              <b>
                Our breakpoints may change as we move more of the product into
                responsive layouts.
              </b>
            </p>
            <p>
              We use abbreviations for each breakpoint to keep the class names
              concis e. This abbreviated syntax is used consistently across
              responsive styles. Responsive styles allow you to change the
              styles properties at each breakpoint. For example, when using
              column widths for grid layouts, you can change specify that the
              width is 12 columns wide at the small breakpoint, and 6 columns
              wide from the large breakpoint:
              <pre className="p2 bg-gray">
                &lt;div class="col-sm-12 col-lg-6"&gt; ... &lt;/div&gt;
              </pre>
            </p>

            <table className="border">
              <thead>
                <tr>
                  <th className="border py-2 px-3">Breakpoint</th>
                  <th className="border py-2 px-3">Syntax</th>
                  <th className="border py-2 px-3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-3">Small</td>
                  <td className="border py-2 px-3">sm</td>
                  <td className="border py-2 px-3">min-width: 544px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">Medium</td>
                  <td className="border py-2 px-3">md</td>
                  <td className="border py-2 px-3">min-width: 768px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">Large</td>
                  <td className="border py-2 px-3">lg</td>
                  <td className="border py-2 px-3">min-width: 1012px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">Extra-large</td>
                  <td className="border py-2 px-3">xl</td>
                  <td className="border py-2 px-3">min-width: 1280px</td>
                </tr>
              </tbody>
            </table>
            <p>
              <b>Note: </b>The lg breakpoint matches our current page width of
              980px including left and right padding of 16px ($spacer-3). This
              is so that content doesn't touch the edges of the window when
              resized.
            </p>
            <p>
              Responsive styles are available for
              <Link to="/utilities/margin"> margin</Link>,
              <Link to="/utilities/padding"> padding</Link>,
              <Link to="/utilities/layout"> layout</Link>,
              <Link to="/utilities/flexbox"> flexbox</Link>, and the
              <Link to="/utilities/grid"> grid </Link>
              system.
            </p>
          </section>

          <section id="breakpoints-variables" className="py-4">
            <h2 className="tuva-line">Breakpoints varients</h2>
            <p className="mt-2">
              The above values are defined as variables, and then put into a
              Sass map that generates the media query mixin.
            </p>
            <div className="border">
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline);
                  this.setState({
                    codecopy: "Copied",
                    codecopy1: "Copy",
                    codecopy2: "Copy",
                    codecopy3: "Copy"
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

          <section id="mediaquery-mixins" className="py-4">
            <h2 className="tuva-line">Media query mixins</h2>
            <p className="mt-2">
              Use media query mixins when you want to change CSS properties at a
              particular breakpoint. The media query mixin works by passing in a
              breakpoint value, such as breakpoint(md). Media queries are scoped
              from each breakpoint and upwards. In the example below, the font
              size is 28px until the viewport size meets the lg breakpoint, from
              there upwards—including through the xl breakpoint—the font size
              will be 32px.
            </p>
            <div className="border">
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline1);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copied",
                    codecopy2: "Copy",
                    codecopy3: "Copy"
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

          <section id="responsive-varients" className="py-4">
            <h2 className="tuva-line">Responsive variants</h2>
            <p className="mt-2">
              The $responsive-variants variable is a mapping of breakpoints to
              classname variants, and should be used like so:
            </p>
            <div className="border">
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline2);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copy",
                    codecopy2: "Copied",
                    codecopy3: "Copy"
                  });
                }}
              >
                {this.state.codecopy2}
              </button>
              <SyntaxHighlighter language="scss" style={docco}>
                {codeline2}
              </SyntaxHighlighter>
            </div>
            <p className="mt-2">The resulting CSS would be:</p>
            <div className="border">
              <button
                className="btn btn-hover-blue float-right mr-3 mt-3"
                onClick={() => {
                  navigator.clipboard.writeText(codeline3);
                  this.setState({
                    codecopy: "Copy",
                    codecopy1: "Copy",
                    codecopy2: "Copy",
                    codecopy3: "Copied"
                  });
                }}
              >
                {this.state.codecopy3}
              </button>
              <SyntaxHighlighter language="scss" style={docco}>
                {codeline3}
              </SyntaxHighlighter>
            </div>
            <div className="mt-2 py-4">
              <b>Caution!</b>
              <ol className="ml-4 mt-2">
                <li>
                  {`Don't precede the #{$variation} interpolation with a hyphen
                because the first value of $variant will be an empty string.`}
                </li>
                <li>
                  For consistency, please put the @include
                  breakpoint($breakpoint) call directly inside the
                  $responsive-variants loop. This will help keep file sizes
                  small by "batching" selectors in shared @media queries.
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Breakpoints;
