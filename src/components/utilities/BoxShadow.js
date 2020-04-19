import React, { Component } from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

class BoxShadow extends Component {
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
    <div class="box-shadow p-3">
      .box-shadow
    </div>
    `;

    let codeline1 = `
  <div class="col-6">
    <div class="Box box-shadow">
      <div class="Box-row">
        <h3 class="m-0">Organization</h3>
      </div>
      <div class="Box-row">
        <p class="mb-0 text-gray">
          Taxidermy live-edge mixtape, keytar tumeric locavore meh selvage deep v letterpress vexillologist lo-fi tousled
          church-key thundercats. Brooklyn bicycle rights tousled, marfa actually.
        </p>
      </div>
      <div class="Box-row">
        <button type="button" name="Create an organization" class="btn btn-primary btn-block">
          Create an organization
        </button>
      </div>
    </div>
  </div>
    `;

    let codeline2 = `
    <div class="box-shadow-medium p-3">
      .box-shadow-medium
    </div>
    `;

    let codeline3 = `
  <div class="col-6">
    <a class="d-block box-shadow-medium px-3 pt-4 pb-6 position-relative rounded-1 overflow-hidden no-underline" href="#">
      <div class="bg-blue position-absolute top-0 left-0 py-1 width-full"></div>
      <h3 class="text-gray-dark">Serverless architecture</h3>
      <p class="text-gray">
        Build powerful, event-driven, serverless architectures with these open-source libraries and frameworks.
      </p>
      <ul class="position-absolute bottom-0 pb-3 text-small text-gray list-style-none ">
        <li class="d-inline-block mr-1">
          <!-- <%= octicon "repo", :class => "mr-1" %> -->
          <svg class="octicon octicon-repo mr-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
          12 Repositories
        </li>
        <li class="d-inline-block">
          <!-- <%= octicon "code", :class => "mr-1" %> -->
          <svg class="octicon octicon-code mr-1" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
          5 Languages
        </li>
      </ul>
    </a>
  </div>
    `;

    let codeline4 = `
  <div class="box-shadow-large p-3">
    .box-shadow-large
  </div>
    `;

    let codeline5 = `
  <div class="box-shadow-large rounded-2 overflow-hidden mb-3 p-2">
    <img
      src="https://tuvalabs.com/static/img/tuva-logo-teal.png"
      class="img-responsive"
      alt="Tuva Logo"
    />
  </div>
    `;

    let codeline6 = `
  <div class="box-shadow-extra-large p-3">
    .box-shadow-extra-large
  </div>
    `;

    let codeline7 = `
  <div class="box-shadow-large box-shadow-none p-3">
    .box-shadow-none
  </div>
    `;
    return (
      <div className="tuva-container">
        <div>
          <div className="tuva-line">
            <h1>Box Shadow</h1>
            <span className="State bg-yellow float-left mt-4">Stable</span>
            <span className="Counter float-right mt-4">
              <a
                href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/box-shadow.scss"
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
                <a href="#default">Default</a>
              </li>
              <li>
                <a href="#medium">Medium</a>
              </li>
              <li>
                <a href="#large">Large</a>
              </li>
              <li>
                <a href="#extra-large">Extra Large</a>
              </li>
              <li>
                <a href="#remove-a-box-shadow">Remove a box shadow</a>
              </li>
            </ul>
            <p className="mt-2">
              Box shadows are used to make content appear elevated. They are
              typically applied to containers of content that users need to pay
              attention to or content that appears on top of (overlapping) other
              elements on the page (like a pop-over or modal).
            </p>
          </section>

          <section id="default" className="py-4">
            <h2 className="tuva-line">Default</h2>
            <p className="mt-2">
              Default shadows are mainly used on things that need to appear
              slightly elevated, like pricing cards or UI elements containing
              important information.
            </p>
            <div className="border p-2">
              <div className="box-shadow p-3">.box-shadow</div>
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
            <p className="mt-2">
              These types of shadows are typically applied to elements with
              borders, such as the
              <Link to="/components/box"> Box component</Link>.
            </p>
            <div className="border p-2">
              <div className="col-6">
                <div className="Box box-shadow">
                  <div className="Box-row">
                    <h3 className="m-0">Organization</h3>
                  </div>
                  <div className="Box-row">
                    <p className="mb-0 text-gray">
                      Taxidermy live-edge mixtape, keytar tumeric locavore meh
                      selvage deep v letterpress vexillologist lo-fi tousled
                      church-key thundercats. Brooklyn bicycle rights tousled,
                      marfa actually.
                    </p>
                  </div>
                  <div className="Box-row">
                    <button
                      type="button"
                      name="Create an organization"
                      className="btn btn-primary btn-block"
                    >
                      Create an organization
                    </button>
                  </div>
                </div>
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
          </section>

          <section id="medium" className="py-4">
            <h2 className="tuva-line">Medium</h2>
            <p className="mt-2">
              Medium box shadows are more diffused and slightly larger than
              small box shadows.
            </p>
            <div className="border p-2">
              <div className="box-shadow-medium p-3">.box-shadow-medium</div>
              <div className="py-2">
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
            </div>
            <p className="mt-2">
              Medium box shadows are typically used on editorialized content
              that needs to appear elevated. Most of the time, the elements
              using this level of shadow will be clickable.
            </p>
            <div className="border p-2">
              <div className="col-6">
                <a
                  className="d-block box-shadow-medium px-3 pt-4 pb-6 position-relative rounded-1 overflow-hidden no-underline"
                  href="#"
                >
                  <div className="bg-blue position-absolute top-0 left-0 py-1 width-full"></div>
                  <h3 className="text-gray-dark">Serverless architecture</h3>
                  <p className="text-gray">
                    Build powerful, event-driven, serverless architectures with
                    these open-source libraries and frameworks.
                  </p>
                  <ul className="position-absolute bottom-0 pb-3 text-small text-gray list-style-none ">
                    <li className="d-inline-block mr-1">
                      <svg
                        className="octicon octicon-repo mr-1"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        height="16"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                        ></path>
                      </svg>
                      12 Repositories
                    </li>
                    <li className="d-inline-block">
                      <svg
                        className="octicon octicon-code mr-1"
                        viewBox="0 0 14 16"
                        version="1.1"
                        width="14"
                        height="16"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"
                        ></path>
                      </svg>
                      5 Languages
                    </li>
                  </ul>
                </a>
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
          <section id="large" className="py-4">
            <h2 className="tuva-line">Large</h2>
            <p className="mt-2">
              Large box shadows are very diffused and used sparingly in the
              product UI.
            </p>
            <div className="border p-2">
              <div className="box-shadow-large p-3 mb-2">.box-shadow-large</div>
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
              These shadows are used for marketing content, UI screenshots, and
              content that appears on top of other page elements.
            </p>
            <div className="border p-3">
              <div className="box-shadow-large rounded-2 overflow-hidden mb-3 p-2">
                <img
                  src="https://tuvalabs.com/static/img/tuva-logo-teal.png"
                  className="img-responsive"
                  alt="Tuva Logo"
                />
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
          </section>
          <section id="extra-large" className="py-4">
            <h2 className="tuva-line">Extra Large</h2>
            <p className="mt-2">
              Extra large box shadows are even more diffused.
            </p>
            <div className="border py-2">
              <div className="box-shadow-extra-large p-3 mb-3">
                .box-shadow-extra-large
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
          </section>
          <section id="remove-a-box-shadow" className="py-4">
            <h2 className="tuva-line">Remove a box shadow</h2>
            <p className="mt-2">
              Additionally there is a box-shadow-none class that removes
              box-shadow:
            </p>
            <div className="border p-2">
              <div className="box-shadow-large box-shadow-none p-3">
                .box-shadow-none
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
        </div>
      </div>
    );
  }
}

export default BoxShadow;
