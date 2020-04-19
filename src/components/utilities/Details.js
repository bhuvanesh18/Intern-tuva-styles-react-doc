import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

class Details extends Component {
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
  <details class="details-overlay">
    <summary class="btn">More</summary>
    <div class="border p-3 mt-2">Hidden text</div>
  </details>
    `;

    let codeline1 = `
  <details class="details-overlay details-overlay-dark">
    <summary class="btn">More</summary>
    <div class="border p-3 mt-2">Hidden text</div>
  </details>
    `;

    let codeline2 = `
  <details class="details-reset">
    <summary class="btn">More <span class="dropdown-caret"></summary>
    <div class="border p-3 mt-2">Hidden text</div>
  </details>
    `;

    let codeline3 = `
  <details>
    <summary class="btn btn-primary">More</summary>
    <div class="border p-3 mt-2">Hidden text</div>
  </details>

  <details class="details-reset mt-3">
    <summary class="btn-link">More <span class="dropdown-caret"></summary>
    <div class="border p-3 mt-2">Hidden text</div>
  </details>
    `;

    return (
      <div className="tuva-container">
        <div>
          <div className="tuva-line">
            <h1>Details</h1>
            <span className="State bg-yellow float-left mt-4">Stable</span>
            <span className="Counter float-right mt-4">
              <a
                href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/details.scss"
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
                <a href="#fullscreen-click-area">Fullscreen click area</a>
              </li>
              <li>
                <a href="#darkened-fullscreen-click-area">
                  Darkened fullscreen click area
                </a>
              </li>
              <li>
                <a href="#custom-caret">Custom caret</a>
              </li>
              <li>
                <a href="#using-button-styles-with-the-details-summary-element">
                  Using button styles with the details summary element
                </a>
              </li>
            </ul>
            <p className="mt-2">
              Details classes are created to enhance the native behaviors of
              &lt;details&gt;.
            </p>
          </section>

          <section id="fullscreen-click-area" className="py-4">
            <h2 className="tuva-line">Fullscreen click area</h2>
            <p className="mt-2">
              Use .details-overlay to expand the click area of &lt;summary&gt;
              to cover the full screen, so user can click anywhere on a page to
              close &lt;details&gt;.
            </p>
            <div className="border">
              <details className="details-overlay px-4 py-2">
                <summary className="btn">More</summary>
                <div className="border p-3 mt-2">Hidden text</div>
              </details>
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
              <SyntaxHighlighter language="html" style={docco}>
                {codeline}
              </SyntaxHighlighter>
            </div>
          </section>

          <section id="darkened-fullscreen-click-area" className="py-4">
            <h2 className="tuva-line">Darkened fullscreen click area</h2>
            <p className="mt-2">
              Use .details-overlay-dark darken the click area overlay. Useful
              for modals.
            </p>
            <div className="border">
              <div className="m-2 p-2">
                <details className="details-overlay details-overlay-dark">
                  <summary className="btn">More</summary>
                  <div className="border p-3 mt-2">Hidden text</div>
                </details>
              </div>
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
              <SyntaxHighlighter language="html" style={docco}>
                {codeline1}
              </SyntaxHighlighter>
            </div>
          </section>

          <section id="custom-caret" className="py-4">
            <h2 className="tuva-line">Custom caret</h2>
            <p className="mt-2">
              Use .details-reset to remove the default caret (that little
              triangle on the left). You then can add the .dropdown-caret on the
              right of the text.
            </p>
            <div className="border">
              <div className="py-2 px-4">
                <details className="details-reset">
                  <summary className="btn">
                    More <span className="dropdown-caret"></span>
                  </summary>
                  <div className="border p-3 mt-2">Hidden text</div>
                </details>
              </div>
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
              <SyntaxHighlighter language="html" style={docco}>
                {codeline2}
              </SyntaxHighlighter>
            </div>
          </section>
          <section
            id="using-button-styles-with-the-details-summary-element"
            className="py-4"
          >
            <h2 className="tuva-line">
              Using button styles with the details summary element
            </h2>
            <p className="mt-2">
              You can add .btn and .btn-* classes to any &lt;summary&gt; element
              so that it gains the appearance of a button, and selected/active
              styles when the parent &lt;details&gt; element is open.
            </p>
            <div className="border">
              <div className="py-2 mx-4">
                <details>
                  <summary className="btn btn-primary">More</summary>
                  <div className="border p-3 mt-2">Hidden text</div>
                </details>

                <details className="details-reset mt-3">
                  <summary className="btn-link">
                    More <span className="dropdown-caret"></span>
                  </summary>
                  <div className="border p-3 mt-2">Hidden text</div>
                </details>
              </div>
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
              <SyntaxHighlighter language="html" style={docco}>
                {codeline3}
              </SyntaxHighlighter>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Details;
