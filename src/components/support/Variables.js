import React, { Component } from "react";

class Variables extends Component {
  render() {
    return (
      <div className="tuva-container">
        <div>
          <div className="tuva-line">
            <h1>Variables</h1>
            <span className="State bg-yellow float-left mt-4">Stable</span>
            <span className="Counter float-right mt-4">
              <a
                href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables"
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
                <a href="#color">Color variables</a>
              </li>
              <li>
                <a href="#color-system">Color system variables</a>
              </li>
              <li>
                <a href="#typography">Typography variables</a>
              </li>
              <li>
                <a href="#misc">Misc variables</a>
              </li>
              <li>
                <a href="#layout">Layout variables</a>
              </li>
            </ul>
            <p className="mt-4">
              The tables below list all of the global SCSS variables defined in
              the{" "}
              <a
                href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables"
                target="_blank"
                rel="noopener noreferrer"
              >
                support/variables
              </a>{" "}
              directory.
            </p>
          </section>
          <section id="color" className="mt-2">
            <h2 className="tuva-line mt-2">Color variables</h2>
            <h4 className="mt-2">
              Defined in{" "}
              <a
                href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/colors.scss"
                target="_blank"
                rel="noopener noreferrer"
              >
                src/support/variables/colors.scss
              </a>
            </h4>
            <table className="width-full border mt-2">
              <thead>
                <tr>
                  <th className="border py-2 px-3">Name</th>
                  <th className="border py-2 px-3">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-3">$border-black-fade</td>
                  <td className="border py-2 px-3">rgba($black, 0.15)</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-white-fade</td>
                  <td className="border py-2 px-3">rgba($white, 0.15)</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-blue</td>
                  <td className="border py-2 px-3">#268c97</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-blue-light</td>
                  <td className="border py-2 px-3">#7fcbd4</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-red</td>
                  <td className="border py-2 px-3">#c10000</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-red-light</td>
                  <td className="border py-2 px-3">#db6f6f</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-yellow</td>
                  <td className="border py-2 px-3">#d7bc61</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-gray-dark</td>
                  <td className="border py-2 px-3">#c5cad3</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-gray-darker</td>
                  <td className="border py-2 px-3">#808080</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-gray-light</td>
                  <td className="border py-2 px-3">#eceef1</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-gray</td>
                  <td className="border py-2 px-3">#e4e7eb</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$bg-blue-light</td>
                  <td className="border py-2 px-3">#A4DBE1</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$bg-blue</td>
                  <td className="border py-2 px-3">#26aebc</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$bg-gray-dark</td>
                  <td className="border py-2 px-3">#3d4146</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$bg-gray-light</td>
                  <td className="border py-2 px-3">#edf2f7</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$bg-gray</td>
                  <td className="border py-2 px-3">#e4e7eb</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$bg-red</td>
                  <td className="border py-2 px-3">#EB0202</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$bg-red-light</td>
                  <td className="border py-2 px-3">#FFA6A6</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$bg-white</td>
                  <td className="border py-2 px-3">#ffffff</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$bg-yellow</td>
                  <td className="border py-2 px-3">#ECB806</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$bg-yellow-light</td>
                  <td className="border py-2 px-3">#FBD968</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$bg-yellow-dark</td>
                  <td className="border py-2 px-3">#C89A00</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="color-system" className="mt-2">
            <h2 className="tuva-line mt-2">Color system variables</h2>
            <h4 className="mt-2">
              Defined in{" "}
              <a
                href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/color-system.scss"
                target="_blank"
                rel="noopener noreferrer"
              >
                src/support/variables/color-system.scss
              </a>
            </h4>
            <table className="width-full border mt-2">
              <thead>
                <tr>
                  <th className="border py-2 px-3">Name</th>
                  <th className="border py-2 px-3">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-3">$gray-000</td>
                  <td className="border py-2 px-3">#f9f9fb</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$gray-100</td>
                  <td className="border py-2 px-3">#f7f7fb</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$gray-200</td>
                  <td className="border py-2 px-3">#edf2f7</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$gray-300</td>
                  <td className="border py-2 px-3">#eeeeee</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$gray-400</td>
                  <td className="border py-2 px-3">#e4e7eb</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$gray-500</td>
                  <td className="border py-2 px-3">#c5cad3</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$gray-600</td>
                  <td className="border py-2 px-3">#828890</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$gray-700</td>
                  <td className="border py-2 px-3">#808080</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$gray-800</td>
                  <td className="border py-2 px-3">#666666</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$gray-900</td>
                  <td className="border py-2 px-3">#3d4146</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$blue-000</td>
                  <td className="border py-2 px-3">#DEF7FA</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$blue-100</td>
                  <td className="border py-2 px-3">#A4DBE1</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$blue-200</td>
                  <td className="border py-2 px-3">#7FCBD4</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$blue-300</td>
                  <td className="border py-2 px-3">#53C3D0</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$blue-400</td>
                  <td className="border py-2 px-3">#26aebc</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$blue-500</td>
                  <td className="border py-2 px-3">#268C97</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$blue-600</td>
                  <td className="border py-2 px-3">#17717A</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$blue-700</td>
                  <td className="border py-2 px-3">#0B5F68</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$blue-800</td>
                  <td className="border py-2 px-3">#005962</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$blue-900</td>
                  <td className="border py-2 px-3">#00484F</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$yellow-000</td>
                  <td className="border py-2 px-3">#FFEFB8</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$yellow-100</td>
                  <td className="border py-2 px-3">#FFE89B</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$yellow-200</td>
                  <td className="border py-2 px-3">#FBD968</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$yellow-300</td>
                  <td className="border py-2 px-3">#FCD03D</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$yellow-400</td>
                  <td className="border py-2 px-3">#FCC714</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$yellow-500</td>
                  <td className="border py-2 px-3">#ECB806</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$yellow-600</td>
                  <td className="border py-2 px-3">#DAA803</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$yellow-700</td>
                  <td className="border py-2 px-3">#C89A00</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$yellow-800</td>
                  <td className="border py-2 px-3">#C29602</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$yellow-900</td>
                  <td className="border py-2 px-3">#A57F02</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$red-000</td>
                  <td className="border py-2 px-3">#FFC8C8</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$red-100</td>
                  <td className="border py-2 px-3">#FFA6A6</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$red-200</td>
                  <td className="border py-2 px-3">#FF7F7F</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$red-300</td>
                  <td className="border py-2 px-3">#FF4C4C</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$red-400</td>
                  <td className="border py-2 px-3">#FF2323</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$red-500</td>
                  <td className="border py-2 px-3">#EB0202</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$red-600</td>
                  <td className="border py-2 px-3">#C10000</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$red-700</td>
                  <td className="border py-2 px-3">#CE0000</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$red-800</td>
                  <td className="border py-2 px-3">#B00202</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$red-900</td>
                  <td className="border py-2 px-3">#8A0202</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="typography" className="mt-2">
            <h2 className="tuva-line mt-2">Typography variables</h2>
            <h4 className="mt-2">
              Defined in{" "}
              <a
                href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/typography.scss"
                target="_blank"
                rel="noopener noreferrer"
              >
                src/support/variables/typography.scss
              </a>
            </h4>
            <table className="width-full border mt-2">
              <thead>
                <tr>
                  <th className="border py-2 px-3">Name</th>
                  <th className="border py-2 px-3">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-3">$h0-size-mobile</td>
                  <td className="border py-2 px-3">46px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$h1-size-mobile</td>
                  <td className="border py-2 px-3">40px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$h2-size-mobile</td>
                  <td className="border py-2 px-3">28px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$h3-size-mobile</td>
                  <td className="border py-2 px-3">22px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$h0-size</td>
                  <td className="border py-2 px-3">54px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$h1-size</td>
                  <td className="border py-2 px-3">46px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$h2-size</td>
                  <td className="border py-2 px-3">30px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$h3-size</td>
                  <td className="border py-2 px-3">24px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$h4-size</td>
                  <td className="border py-2 px-3">20px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$h5-size</td>
                  <td className="border py-2 px-3">18px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$h6-size</td>
                  <td className="border py-2 px-3">16px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$font-size-small</td>
                  <td className="border py-2 px-3">12px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$font-weight-black</td>
                  <td className="border py-2 px-3">900</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$font-weight-bold</td>
                  <td className="border py-2 px-3">700</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$font-weight-semibold</td>
                  <td className="border py-2 px-3">600</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$font-weight-medium</td>
                  <td className="border py-2 px-3">500</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$font-weight-normal</td>
                  <td className="border py-2 px-3">400</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$font-weight-light</td>
                  <td className="border py-2 px-3">300</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$lh-condensed-ultra</td>
                  <td className="border py-2 px-3">1</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$lh-condensed</td>
                  <td className="border py-2 px-3">1.25</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$lh-default</td>
                  <td className="border py-2 px-3">1.5</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="misc" className="mt-2">
            <h2 className="tuva-line mt-2">Misc variables</h2>
            <h4 className="mt-2">
              Defined in{" "}
              <a
                href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/misc.scss"
                target="_blank"
                rel="noopener noreferrer"
              >
                src/support/variables/misc.scss
              </a>
            </h4>
            <table className="width-full border mt-2">
              <thead>
                <tr>
                  <th className="border py-2 px-3">Name</th>
                  <th className="border py-2 px-3">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-3">$border-width</td>
                  <td className="border py-2 px-3">1px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-color</td>
                  <td className="border py-2 px-3">#e4e7eb</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-style</td>
                  <td className="border py-2 px-3">solid</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border</td>
                  <td className="border py-2 px-3">1px solid #e4e7eb</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$border-radius</td>
                  <td className="border py-2 px-3">3px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$box-shadow</td>
                  <td className="border py-2 px-3">
                    0 1px 1px rgba($black, 0.1)
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$box-shadow-medium</td>
                  <td className="border py-2 px-3">
                    0 1px 5px rgba($black, 0.15)
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$box-shadow-large</td>
                  <td className="border py-2 px-3">
                    0 1px 15px rgba($black, 0.15)
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$box-shadow-extra-large</td>
                  <td className="border py-2 px-3">
                    0 10px 50px rgba($black, 0.07)
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$tooltip-max-width</td>
                  <td className="border py-2 px-3">250px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">
                    $tooltip-background-color
                  </td>
                  <td className="border py-2 px-3">#000000</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$tooltip-text-color</td>
                  <td className="border py-2 px-3">#ffffff</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$tooltip-delay</td>
                  <td className="border py-2 px-3">0.4s</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$tooltip-duration</td>
                  <td className="border py-2 px-3">0.1s</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="layout" className="mt-2 pb-6">
            <h2 className="tuva-line mt-2">Layout variables</h2>
            <h4 className="mt-2">
              Defined in{" "}
              <a
                href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/layout.scss"
                target="_blank"
                rel="noopener noreferrer"
              >
                src/support/variables/layout.scss
              </a>
            </h4>
            <table className="width-full border mt-2">
              <thead>
                <tr>
                  <th className="border py-2 px-3">Name</th>
                  <th className="border py-2 px-3">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-3">$spacer</td>
                  <td className="border py-2 px-3">8px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-0</td>
                  <td className="border py-2 px-3">0</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-1</td>
                  <td className="border py-2 px-3">4px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-2</td>
                  <td className="border py-2 px-3">8px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-3</td>
                  <td className="border py-2 px-3">16px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-4</td>
                  <td className="border py-2 px-3">24px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-5</td>
                  <td className="border py-2 px-3">32px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-6</td>
                  <td className="border py-2 px-3">40px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$em-spacer-1</td>
                  <td className="border py-2 px-3">0.0625em</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$em-spacer-2</td>
                  <td className="border py-2 px-3">0.125em</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$em-spacer-3</td>
                  <td className="border py-2 px-3">0.25em</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$em-spacer-4</td>
                  <td className="border py-2 px-3">0.375em</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$em-spacer-5</td>
                  <td className="border py-2 px-3">0.5em</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$em-spacer-6</td>
                  <td className="border py-2 px-3">0.75em</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$container-width</td>
                  <td className="border py-2 px-3">980px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$grid-gutter</td>
                  <td className="border py-2 px-3">10px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$width-xs</td>
                  <td className="border py-2 px-3">0</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$width-sm</td>
                  <td className="border py-2 px-3">544px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$width-md</td>
                  <td className="border py-2 px-3">768px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$width-lg</td>
                  <td className="border py-2 px-3">1012px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$width-xl</td>
                  <td className="border py-2 px-3">1280px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$container-sm</td>
                  <td className="border py-2 px-3">544px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$container-md</td>
                  <td className="border py-2 px-3">768px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$container-lg</td>
                  <td className="border py-2 px-3">1012px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$container-xl</td>
                  <td className="border py-2 px-3">1280px</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
}

export default Variables;
