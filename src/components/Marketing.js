import React from "react";
import { ComponentHeading, CodeBlocks } from "./mini_components";
function Marketing() {
  return (
    <div className="tuva-container">
      <ComponentHeading
        heading="Marketing"
        isstable="Stable"
        link="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/marketing"
      />
      <CodeBlocks
        htmlcoderender={[
          <div className="my-4">
            <div className="d-flex my-4">
              <div className="mt-3" style={{ width: 150 + "px" }}>
                <h4 className="text-red">Headings</h4>
              </div>
              <div className="ml-5 flex-1">
                <h1 className="h0-mkt">This is a Marketing h0</h1>
                <h1 className="h1-mkt text-white text-shadow-dark">
                  This is a Marketing h1
                </h1>
                <h1 className="h1-mkt">This is a Marketing h1</h1>
                <h1 className="h1-mkt text-mkt-gray">This is a Marketing h1</h1>
                <h2 className="h2-mkt">This is a Marketing h2</h2>
                <h2 className="h2-mkt text-mkt-gray">This is a Marketing h2</h2>
                <h2 className="h2-mkt text-yellow">This is a Marketing h2</h2>
                <h3 className="h3-mkt">This is a Marketing h3</h3>
                <h4 className="h4-mkt">This is a Marketing h4</h4>
                <h5 className="h5-mkt">This is a Marketing h5</h5>
                <h6 className="h6-mkt">This is a Marketing h6</h6>
              </div>
            </div>
            <div className="d-flex my-4">
              <div style={{ width: 150 + "px" }}>
                <h4 className="text-red">Subtitles</h4>
              </div>
              <div className="ml-5 flex-1">
                <h1 className="s0-mkt">This is a Marketing s0</h1>
                <h2 className="s0-mkt-bold">This is a Marketing s0-bold</h2>
                <h3 className="s1-mkt">This is a Marketing s1</h3>
                <h4 className="s1-mkt-bold">This is a Marketing s1-bold</h4>
              </div>
            </div>
            <div className="d-flex my-4">
              <div style={{ width: 150 + "px" }}>
                <h4 className="text-red">Paragraphs</h4>
              </div>
              <div className="ml-5 flex-1">
                <p className="para0-mkt">This is a Marketing p0</p>
                <p className="para0-mkt-bold">This is a Marketing p0-bold</p>
                <p className="para1-mkt">This is a Marketing p1</p>
                <p className="para1-mkt-bold">This is a Marketing p1-bold</p>
              </div>
            </div>
            <div className="d-flex my-4">
              <div style={{ width: 150 + "px" }}>
                <h4 className="text-red">Links</h4>
              </div>
              <div className="ml-5 flex-1">
                <div>
                  <a href="#url" className="link-mkt-0">
                    This is a Marketing link0
                  </a>
                </div>
                <div>
                  <a href="#url" className="link-mkt-1">
                    This is a Marketing link1
                  </a>
                </div>
                <div>
                  <a href="#url" className="link-mkt-2">
                    This is a Marketing link2
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex my-4">
              <div style={{ width: 150 + "px" }}>
                <h4 className="text-red">Buttons</h4>
              </div>
              <div className="ml-5">
                <div className="mb-2">
                  <button className="btn-mkt btn-large-mkt" type="button">
                    Large Button
                  </button>
                </div>
                <div className="mb-2">
                  <button className="btn-mkt btn-wide-mkt" type="button">
                    Extra Wide Button
                  </button>
                </div>
                <div className="mb-2">
                  <button
                    className="btn-mkt btn-large-mkt btn-outline-mkt"
                    type="button"
                  >
                    Outline Button
                  </button>
                </div>
                <div className="mb-2">
                  <button className="btn-mkt" type="button">
                    Medium Button
                  </button>
                </div>
                <div className="mb-2">
                  <button className="btn-mkt btn-primary-mkt" type="button">
                    Medium Button
                  </button>
                </div>
                <div className="mb-2">
                  <button className="btn-mkt btn-small-mkt" type="button">
                    Small Button
                  </button>
                </div>
                <div className="mb-2">
                  <button className="btn-mkt btn-tiny-mkt" type="button">
                    Tiny Button
                  </button>
                </div>
              </div>
            </div>
          </div>,
        ]}
        codeline={[
          `
          <div class="my-4">
          <div class="d-flex my-4">
            <div class="mt-3" style="width: 150px">
              <h4 class="text-red">Headings</h4>
            </div>
            <div class="ml-5 flex-1">
              <h1 class="h0-mkt">This is a Marketing h0</h1>
              <h1 class="h1-mkt text-white text-shadow-dark">
                This is a Marketing h1
              </h1>
              <h1 class="h1-mkt">This is a Marketing h1</h1>
              <h1 class="h1-mkt text-mkt-gray">This is a Marketing h1</h1>
              <h2 class="h2-mkt">This is a Marketing h2</h2>
              <h2 class="h2-mkt text-mkt-gray">This is a Marketing h2</h2>
              <h2 class="h2-mkt text-yellow">This is a Marketing h2</h2>
              <h3 class="h3-mkt">This is a Marketing h3</h3>
              <h4 class="h4-mkt">This is a Marketing h4</h4>
              <h5 class="h5-mkt">This is a Marketing h5</h5>
              <h6 class="h6-mkt">This is a Marketing h6</h6>
            </div>
          </div>
          <div class="d-flex my-4">
            <div style="width: 150px">
              <h4 class="text-red">Subtitles</h4>
            </div>
            <div class="ml-5 flex-1">
              <h1 class="s0-mkt">This is a Marketing s0</h1>
              <h2 class="s0-mkt-bold">This is a Marketing s0-bold</h2>
              <h3 class="s1-mkt">This is a Marketing s1</h3>
              <h4 class="s1-mkt-bold">This is a Marketing s1-bold</h4>
            </div>
          </div>
          <div class="d-flex my-4">
            <div style="width: 150px">
              <h4 class="text-red">Paragraphs</h4>
            </div>
            <div class="ml-5 flex-1">
              <p class="para0-mkt">This is a Marketing p0</p>
              <p class="para0-mkt-bold">This is a Marketing p0-bold</p>
              <p class="para1-mkt">This is a Marketing p1</p>
              <p class="para1-mkt-bold">This is a Marketing p1-bold</p>
            </div>
          </div>
          <div class="d-flex my-4">
            <div style="width: 150px">
              <h4 class="text-red">Links</h4>
            </div>
            <div class="ml-5 flex-1">
              <div>
                <a href="#url" class="link-mkt-0">
                  This is a Marketing link0
                </a>
              </div>
              <div>
                <a href="#url" class="link-mkt-1">
                  This is a Marketing link1
                </a>
              </div>
              <div>
                <a href="#url" class="link-mkt-2">
                  This is a Marketing link2
                </a>
              </div>
            </div>
          </div>
          <div class="d-flex my-4">
            <div style="width: 150px">
              <h4 class="text-red">Buttons</h4>
            </div>
            <div class="ml-5">
              <div class="mb-2">
                <button class="btn-mkt btn-large-mkt" type="button">
                  Large Button
                </button>
              </div>
              <div class="mb-2">
                <button class="btn-mkt btn-wide-mkt" type="button">
                  Extra Wide Button
                </button>
              </div>
              <div class="mb-2">
                <button
                  class="btn-mkt btn-large-mkt btn-outline-mkt"
                  type="button"
                >
                  Outline Button
                </button>
              </div>
              <div class="mb-2">
                <button class="btn-mkt" type="button">
                  Medium Button
                </button>
              </div>
              <div class="mb-2">
                <button class="btn-mkt btn-primary-mkt" type="button">
                  Medium Button
                </button>
              </div>
              <div class="mb-2">
                <button class="btn-mkt btn-small-mkt" type="button">
                  Small Button
                </button>
              </div>
              <div class="mb-2">
                <button class="btn-mkt btn-tiny-mkt" type="button">
                  Tiny Button
                </button>
              </div>
            </div>
          </div>
          </div>
          `,
        ]}
        lang="html"
      />
    </div>
  );
}

export default Marketing;
