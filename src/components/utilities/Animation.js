import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

class Animation extends Component {
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
    <div class="Box">
    <h5 class="anim-fade-in py-2 pl-4">
      This is an example for fade-in animation.
    </h5>
    </div>
    `;

    let codeline1 = `
    <div class="Box">
    <h5 class="anim-fade-out py-2 pl-4">
      This is an example for fade-out animation.
    </h5>
    </div>
    `;

    let codeline2 = `
    <div class="Box">
    <h5 class="anim-fade-up py-2 pl-4">
      This is an example for fade-up animation.
    </h5>
    </div>
    `;

    let codeline3 = `
    <div class="Box">
    <h5 class="anim-fade-down py-2 pl-4">
      This is an example for fade-down animation.
    </h5>
    </div>
    `;

    let codeline4 = `
    <div class="Box">
    <h5 class="anim-scale-in py-2 pl-4">
      This is an example for scale-in animation.
    </h5>
    </div>
    `;

    let codeline5 = `
    <div class="Box">
    <h5 class="anim-grow-x py-2 pl-4">
      This is an example for grow-x animation.
    </h5>
    </div>
    `;

    let codeline6 = `
    <div class="Box">
    <h5 class="anim-pulse py-2 pl-4">
      This is an example for pulse animation.
    </h5>
    </div>
    `;

    let codeline7 = `
    <div class="Box hover-grow">
    <h5 class="py-2 pl-4">
      This is an example for hover-grow animation.
    </h5>
    </div>
    `;
    return (
      <div className="tuva-container">
        <div>
          <div className="tuva-line">
            <h1>Animations</h1>
            <span className="State bg-yellow float-left mt-4">Stable</span>
            <span className="Counter float-right mt-4">
              <a
                href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/utilities/animations.scss"
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
                <a href="#fade-in">Fade In</a>
              </li>
              <li>
                <a href="#fade-out">Fade Out</a>
              </li>
              <li>
                <a href="#fade-up">Fade Up</a>
              </li>
              <li>
                <a href="#fade-down">Fade Down</a>
              </li>
              <li>
                <a href="#scale-in">Scale In</a>
              </li>
              <li>
                <a href="#grow-x">Grow X</a>
              </li>
              <li>
                <a href="#pulse">Pulse</a>
              </li>
              <li>
                <a href="#hover-animation">Hover animation</a>
              </li>
            </ul>
            <p className="mt-2">
              Animations are reusable animation classes that you can use to
              emphasize an element. All of these animations will animate if you
              toggle their visibility using the "Toggle" button.
            </p>
          </section>

          <section id="fade-in" className="py-4">
            <h2 className="tuva-line">Fade In</h2>
            <p className="mt-2">
              The .anim-fade-in class is used to fade in an element on the page.
              This will run once when the element is revealed.
            </p>
            <div className="border">
              <div className="Box">
                <h5 className="anim-fade-in py-2 pl-4">
                  This is an example for fade-in animation.
                </h5>
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
          </section>

          <section id="fade-out" className="py-4">
            <h2 className="tuva-line">Fade Out</h2>
            <p className="mt-2">
              The .anim-fade-out class is used to fade out an element on the
              page. This will run once when the element is revealed.
            </p>
            <div className="border">
              <div className="Box">
                <h5 className="anim-fade-out py-2 pl-4">
                  This is an example for fade-out animation.
                </h5>
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

          <section id="fade-up" className="py-4">
            <h2 className="tuva-line">Fade Up</h2>
            <p className="mt-2">
              The .anim-fade-up class is used to reveal an element on the page
              by sliding it up from below the fold. You should use this in a
              container with overflow: hidden; or on the bottom of the page.
            </p>
            <div className="border">
              <div className="Box">
                <h5 className="anim-fade-up py-2 pl-4">
                  This is an example for fade-up animation.
                </h5>
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
          </section>
          <section id="fade-down" className="py-4">
            <h2 className="tuva-line">Fade Down</h2>
            <p className="mt-2">
              The .anim-fade-down class is used to slide an element down hiding
              it. You should use this in a container with overflow: hidden; or
              on the bottom of the page.
            </p>
            <div className="border">
              <div className="Box overflow-scroll">
                <h5 className="anim-fade-down py-2 pl-4">
                  This is an example for fade-down animation.
                </h5>
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
          <section id="scale-in" className="py-4">
            <h2 className="tuva-line">Scale In</h2>
            <p className="mt-2">
              The .anim-scale-in class will scale the element in. This is useful
              on menus when you want them to appear more friendly.
            </p>
            <div className="border">
              <div className="Box">
                <h5 className="anim-scale-in py-2 pl-4">
                  This is an example for scale-in animation.
                </h5>
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
          </section>
          <section id="grow-x" className="py-4">
            <h2 className="tuva-line">Grow X</h2>
            <p className="mt-2">
              The .anim-grow-x class will grow an element width from 0-:100:
              real quick.
            </p>
            <div className="border">
              <div className="Box">
                <h5 className="anim-grow-x py-2 pl-4">
                  This is an example for grow-x animation.
                </h5>
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
          <section id="pulse" className="py-4">
            <h2 className="tuva-line">Pulse</h2>
            <p className="mt-2">
              The .anim-pulse class will pulse an element infinitely.
            </p>
            <div className="border">
              <div className="Box">
                <h5 className="anim-pulse py-2 pl-4">
                  This is an example for pulse animation.
                </h5>
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
          <section id="hover-animation" className="py-4">
            <h2 className="tuva-line">Hover animation</h2>
            <p className="mt-2">
              The .hover-grow class will increase the scale of the element upon
              hover.
            </p>
            <div className="border">
              <div className="Box hover-grow">
                <h5 className="py-2 pl-4">
                  This is an example for hover animation.
                </h5>
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

export default Animation;
