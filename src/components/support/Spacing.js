import React, { Component } from "react";
import { Link } from "react-router-dom";

class Spacing extends Component {
  render() {
    return (
      <div className="tuva-container">
        <div>
          <div className="tuva-line">
            <h1>Spacing</h1>
            <span className="State bg-yellow float-left mt-4">Stable</span>
            <span className="Counter float-right mt-4">
              <a href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/layout.scss">
                View Source
              </a>
            </span>
          </div>

          <section className="mt-6 pt-6 pl-6">
            <ul>
              <li>
                <a href="#spacing-scale">Spacing scale</a>
              </li>
              <li>
                <a href="#em-based-spacing">Em-based spacing</a>
              </li>
            </ul>
          </section>

          <section id="spacing-scale" className="mt-4">
            <h2 className="tuva-line">Spacing scale</h2>
            <p>
              The spacing scale is a <b>base-8</b> scale. We chose a base-8
              scale because eight is a highly composable number (it can be
              divided and multiplied many times and result in whole numbers),
              yet allows spacing dense enough for GitHub's UI. The scale's
              exception is that it begins at 4px to allow smaller padding and
              margin for denser parts of the site, from there on it steps up
              consistently in equal values of 8px.
            </p>
            <table className="border mt-3">
              <thead>
                <tr>
                  <th className="border py-2 px-3">Variable</th>
                  <th className="border py-2 px-3">Scale</th>
                  <th className="border py-2 px-3">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-3">$spacer-0</td>
                  <td className="border py-2 px-3">0</td>
                  <td className="border py-2 px-3">0</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-1</td>
                  <td className="border py-2 px-3">1</td>
                  <td className="border py-2 px-3">4px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-2</td>
                  <td className="border py-2 px-3">2</td>
                  <td className="border py-2 px-3">8px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-3</td>
                  <td className="border py-2 px-3">3</td>
                  <td className="border py-2 px-3">16px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-4</td>
                  <td className="border py-2 px-3">4</td>
                  <td className="border py-2 px-3">24px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-5</td>
                  <td className="border py-2 px-3">5</td>
                  <td className="border py-2 px-3">32px</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$spacer-6</td>
                  <td className="border py-2 px-3">6</td>
                  <td className="border py-2 px-3">40px</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3">
              These variables are encouraged to be used within components and
              custom CSS. The spacing scale is also used for
              <Link to="/utilities/margin"> margin</Link> and
              <Link to="/utilities/padding"> padding</Link>
              utilities.
            </p>
          </section>

          <section id="em-based-spacing" className="mt-4 pb-4">
            <h2 className="tuva-line">Em-based spacing</h2>
            <p>
              Ems are used for spacing within components such as buttons and
              form elements. We stick to common fractions for em values (and
              powers of 2 where possible) so that , in combination with
              typography and line-height, the total height lands on sensible
              numbers.
            </p>
            <table className="border mt-3">
              <thead>
                <tr>
                  <th className="border py-2 px-3">Variable</th>
                  <th className="border py-2 px-3">Fraction</th>
                  <th className="border py-2 px-3">Y Padding (em)</th>
                  <th className="border py-2 px-3">Total height at 16px</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-3">$em-spacer-1</td>
                  <td className="border py-2 px-3">1/16</td>
                  <td className="border py-2 px-3">0.625</td>
                  <td className="border py-2 px-3">26</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$em-spacer-2</td>
                  <td className="border py-2 px-3">1/8</td>
                  <td className="border py-2 px-3">0.125</td>
                  <td className="border py-2 px-3">28</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$em-spacer-3</td>
                  <td className="border py-2 px-3">1/4</td>
                  <td className="border py-2 px-3">0.25</td>
                  <td className="border py-2 px-3">32</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$em-spacer-4</td>
                  <td className="border py-2 px-3">3/8</td>
                  <td className="border py-2 px-3">0.375</td>
                  <td className="border py-2 px-3">36</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$em-spacer-5</td>
                  <td className="border py-2 px-3">1/2</td>
                  <td className="border py-2 px-3">0.5</td>
                  <td className="border py-2 px-3">40</td>
                </tr>
                <tr>
                  <td className="border py-2 px-3">$em-spacer-6</td>
                  <td className="border py-2 px-3">3/4</td>
                  <td className="border py-2 px-3">0.75</td>
                  <td className="border py-2 px-3">48</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
}

export default Spacing;
