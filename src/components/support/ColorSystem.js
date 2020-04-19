import React, { Component } from "react";
import { Link } from "react-router-dom";

class ColorSystem extends Component {
  render() {
    return (
      <div className="tuva-container">
        <div>
          <div className="tuva-line">
            <h1>Color system</h1>
            <span className="State bg-yellow float-left mt-4">Stable</span>
            <span className="Counter float-right mt-4">
              <a href="https://github.com/TuvaLabs/tuva-styles/blob/dev-1/src/support/variables/color-system.scss">
                View Source
              </a>
            </span>
          </div>

          <section className="mt-6 pt-6 pl-6">
            <ul>
              <li>
                <a href="#color-palette">Color palette</a>
              </li>
              <li>
                <a href="#color-utilities">Color utilities</a>
              </li>
              <li>
                <a href="#color-variables">Color variables</a>
              </li>
            </ul>
          </section>

          <section id="color-palette" className="py-4">
            <h2 className="tuva-line">Color palette</h2>
            <div className="mt-6">
              <a href="#gray" className="px-6 py-4 ml-3 bg-gray text-inherit">
                Gray
              </a>
              <a href="#blue" className="px-6 py-4 ml-3 bg-blue text-inherit">
                Blue
              </a>
              <a href="#red" className="px-6 py-4 ml-3 bg-red text-white">
                Red
              </a>
              <a
                href="#yellow"
                className="px-6 py-4 ml-3 bg-yellow text-inherit"
              >
                Yellow
              </a>
              <a href="#black" className="px-6 py-4 ml-3 bg-gray-9 text-white">
                Black
              </a>
              <a href="#white" className="px-6 py-4 ml-3 bg-white text-inherit">
                White
              </a>
            </div>
          </section>

          <section id="color-utilities" className="mt-4 pt-2">
            <h2 className="tuva-line">Color utilities</h2>
            <p>
              There are <Link to="/utilities/color">utility classes</Link> for
              every color in our system.
            </p>
          </section>

          <section id="color-variables" className="py-4">
            <h2 className="tuva-line">Color variables</h2>
          </section>

          <div className="mt-2 pt-2">
            <section id="gray" className="mt-4 float-left ml-4">
              <table className="border">
                <thead>
                  <tr>
                    <th colSpan="3" className="py-4 bg-gray">
                      <h4>Gray</h4>
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="3" className="pt-1 bg-gray-9"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-gray px-6 py-2">$gray</td>
                    <td className="bg-gray px-6 py-2"></td>
                    <td className="bg-gray px-6 py-2">#828890</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-0 px-6 py-2">$gray-000</td>
                    <td className="bg-gray-0 px-6 py-2"></td>
                    <td className="bg-gray-0 px-6 py-2">#f9f9fb</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-1 px-6 py-2">$gray-100</td>
                    <td className="bg-gray-1 px-6 py-2"></td>
                    <td className="bg-gray-1 px-6 py-2">#f7f7fb</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-2 px-6 py-2">$gray-200</td>
                    <td className="bg-gray-2 px-6 py-2"></td>
                    <td className="bg-gray-2 px-6 py-2">#edf2f7</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-3 px-6 py-2">$gray-300</td>
                    <td className="bg-gray-3 px-6 py-2"></td>
                    <td className="bg-gray-3 px-6 py-2">#eeeeee</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-4 px-6 py-2">$gray-400</td>
                    <td className="bg-gray-4 px-6 py-2"></td>
                    <td className="bg-gray-4 px-6 py-2">#e4e7eb</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-5 px-6 py-2">$gray-500</td>
                    <td className="bg-gray-5 px-6 py-2"></td>
                    <td className="bg-gray-5 px-6 py-2">#c5cad3</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-6 px-6 py-2 text-white">
                      $gray-600
                    </td>
                    <td className="bg-gray-6 px-6 py-2"></td>
                    <td className="bg-gray-6 px-6 py-2 text-white">#828890</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-7 px-6 py-2 text-white">
                      $gray-700
                    </td>
                    <td className="bg-gray-7 px-6 py-2"></td>
                    <td className="bg-gray-7 px-6 py-2 text-white">#808080</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-8 px-6 py-2 text-white">
                      $gray-800
                    </td>
                    <td className="bg-gray-8 px-6 py-2"></td>
                    <td className="bg-gray-8 px-6 py-2 text-white">#666666</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-9 px-6 py-2 text-white">
                      $gray-900
                    </td>
                    <td className="bg-gray-9 px-6 py-2"></td>
                    <td className="bg-gray-9 px-6 py-2 text-white">#3d4146</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="mt-4 float-right mr-4" id="blue">
              <table className="border">
                <thead>
                  <tr>
                    <th colSpan="3" className="py-4 bg-blue">
                      <h4>Blue</h4>
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="3" className="pt-1 bg-white"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-blue px-6 py-2">$blue</td>
                    <td className="bg-blue px-6 py-2"></td>
                    <td className="bg-blue px-6 py-2">#26aebc</td>
                  </tr>
                  <tr>
                    <td className="bg-blue-0 px-6 py-2">$blue-000</td>
                    <td className="bg-blue-0 px-6 py-2"></td>
                    <td className="bg-blue-0 px-6 py-2">#DEF7FA</td>
                  </tr>
                  <tr>
                    <td className="bg-blue-1 px-6 py-2">$blue-100</td>
                    <td className="bg-blue-1 px-6 py-2"></td>
                    <td className="bg-blue-1 px-6 py-2">#A4DBE1</td>
                  </tr>
                  <tr>
                    <td className="bg-blue-2 px-6 py-2">$blue-200</td>
                    <td className="bg-blue-2 px-6 py-2"></td>
                    <td className="bg-blue-2 px-6 py-2">#7FCBD4</td>
                  </tr>
                  <tr>
                    <td className="bg-blue-3 px-6 py-2">$blue-300</td>
                    <td className="bg-blue-3 px-6 py-2"></td>
                    <td className="bg-blue-3 px-6 py-2">#53C3D0</td>
                  </tr>
                  <tr>
                    <td className="bg-blue-4 px-6 py-2">$blue-400</td>
                    <td className="bg-blue-4 px-6 py-2"></td>
                    <td className="bg-blue-4 px-6 py-2">#26aebc</td>
                  </tr>
                  <tr>
                    <td className="bg-blue-5 px-6 py-2">$blue-500</td>
                    <td className="bg-blue-5 px-6 py-2"></td>
                    <td className="bg-blue-5 px-6 py-2">#268C97</td>
                  </tr>
                  <tr>
                    <td className="bg-blue-6 px-6 py-2 text-white">
                      $blue-600
                    </td>
                    <td className="bg-blue-6 px-6 py-2"></td>
                    <td className="bg-blue-6 px-6 py-2 text-white">#17717A</td>
                  </tr>
                  <tr>
                    <td className="bg-blue-7 px-6 py-2 text-white">
                      $blue-700
                    </td>
                    <td className="bg-blue-7 px-6 py-2"></td>
                    <td className="bg-blue-7 px-6 py-2 text-white">#0B5F68</td>
                  </tr>
                  <tr>
                    <td className="bg-blue-8 px-6 py-2 text-white">
                      $blue-800
                    </td>
                    <td className="bg-blue-8 px-6 py-2"></td>
                    <td className="bg-blue-8 px-6 py-2 text-white">#005962</td>
                  </tr>
                  <tr>
                    <td className="bg-blue-9 px-6 py-2 text-white">
                      $blue-900
                    </td>
                    <td className="bg-blue-9 px-6 py-2"></td>
                    <td className="bg-blue-9 px-6 py-2 text-white">#00484F</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section id="red" className="mt-4 float-left ml-4">
              <table className="border">
                <thead>
                  <tr>
                    <th colSpan="3" className="py-4 bg-red text-white">
                      <h4>Red</h4>
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="3" className="pt-1 bg-white"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-red px-6 py-2 text-white">$red</td>
                    <td className="bg-red px-6 py-2"></td>
                    <td className="bg-red px-6 py-2 text-white">#EB0202</td>
                  </tr>
                  <tr>
                    <td className="bg-red-0 px-6 py-2">$red-000</td>
                    <td className="bg-red-0 px-6 py-2"></td>
                    <td className="bg-red-0 px-6 py-2">#FFC8C8</td>
                  </tr>
                  <tr>
                    <td className="bg-red-1 px-6 py-2">$red-100</td>
                    <td className="bg-red-1 px-6 py-2"></td>
                    <td className="bg-red-1 px-6 py-2">#FFA6A6</td>
                  </tr>
                  <tr>
                    <td className="bg-red-2 px-6 py-2">$red-200</td>
                    <td className="bg-red-2 px-6 py-2"></td>
                    <td className="bg-red-2 px-6 py-2">#FF7F7F</td>
                  </tr>
                  <tr>
                    <td className="bg-red-3 px-6 py-2 text-white">$red-300</td>
                    <td className="bg-red-3 px-6 py-2"></td>
                    <td className="bg-red-3 px-6 py-2 text-white">#FF4C4C</td>
                  </tr>
                  <tr>
                    <td className="bg-red-4 px-6 py-2 text-white">$red-400</td>
                    <td className="bg-red-4 px-6 py-2"></td>
                    <td className="bg-red-4 px-6 py-2 text-white">#FF2323</td>
                  </tr>
                  <tr>
                    <td className="bg-red-5 px-6 py-2 text-white">$red-500</td>
                    <td className="bg-red-5 px-6 py-2"></td>
                    <td className="bg-red-5 px-6 py-2 text-white">#EB0202</td>
                  </tr>
                  <tr>
                    <td className="bg-red-6 px-6 py-2 text-white">$red-600</td>
                    <td className="bg-red-6 px-6 py-2"></td>
                    <td className="bg-red-6 px-6 py-2 text-white">#C10000</td>
                  </tr>
                  <tr>
                    <td className="bg-red-7 px-6 py-2 text-white">$red-700</td>
                    <td className="bg-red-7 px-6 py-2"></td>
                    <td className="bg-red-7 px-6 py-2 text-white">#CE0000</td>
                  </tr>
                  <tr>
                    <td className="bg-red-8 px-6 py-2 text-white">$red-800</td>
                    <td className="bg-red-8 px-6 py-2"></td>
                    <td className="bg-red-8 px-6 py-2 text-white">#B00202</td>
                  </tr>
                  <tr>
                    <td className="bg-red-9 px-6 py-2 text-white">$red-900</td>
                    <td className="bg-red-9 px-6 py-2"></td>
                    <td className="bg-red-9 px-6 py-2 text-white">#8A0202</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="mt-4 float-right mr-4" id="yellow">
              <table className="border">
                <thead>
                  <tr>
                    <th colSpan="3" className="py-4 bg-yellow">
                      <h4>Yellow</h4>
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="3" className="pt-1 bg-white"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-yellow px-6 py-2">$yellow</td>
                    <td className="bg-yellow px-6 py-2"></td>
                    <td className="bg-yellow px-6 py-2">#ECB806</td>
                  </tr>
                  <tr>
                    <td className="bg-yellow-0 px-6 py-2">$yellow-000</td>
                    <td className="bg-yellow-0 px-6 py-2"></td>
                    <td className="bg-yellow-0 px-6 py-2">#FFEFB8</td>
                  </tr>
                  <tr>
                    <td className="bg-yellow-1 px-6 py-2">$yellow-100</td>
                    <td className="bg-yellow-1 px-6 py-2"></td>
                    <td className="bg-yellow-1 px-6 py-2">#FFE89B</td>
                  </tr>
                  <tr>
                    <td className="bg-yellow-2 px-6 py-2">$yellow-200</td>
                    <td className="bg-yellow-2 px-6 py-2"></td>
                    <td className="bg-yellow-2 px-6 py-2">#FBD968</td>
                  </tr>
                  <tr>
                    <td className="bg-yellow-3 px-6 py-2">$yellow-300</td>
                    <td className="bg-yellow-3 px-6 py-2"></td>
                    <td className="bg-yellow-3 px-6 py-2">#FCD03D</td>
                  </tr>
                  <tr>
                    <td className="bg-yellow-4 px-6 py-2">$yellow-400</td>
                    <td className="bg-yellow-4 px-6 py-2"></td>
                    <td className="bg-yellow-4 px-6 py-2">#FCC714</td>
                  </tr>
                  <tr>
                    <td className="bg-yellow-5 px-6 py-2 ">$yellow-500</td>
                    <td className="bg-yellow-5 px-6 py-2"></td>
                    <td className="bg-yellow-5 px-6 py-2">#ECB806</td>
                  </tr>
                  <tr>
                    <td className="bg-yellow-6 px-6 py-2 text-white">
                      $yellow-600
                    </td>
                    <td className="bg-yellow-6 px-6 py-2"></td>
                    <td className="bg-yellow-6 px-6 py-2 text-white">
                      #DAA803
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-yellow-7 px-6 py-2 text-white">
                      $yellow-700
                    </td>
                    <td className="bg-yellow-7 px-6 py-2"></td>
                    <td className="bg-yellow-7 px-6 py-2 text-white">
                      #C89A00
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-yellow-8 px-6 py-2 text-white">
                      $yellow-800
                    </td>
                    <td className="bg-yellow-8 px-6 py-2"></td>
                    <td className="bg-yellow-8 px-6 py-2 text-white">
                      #C29602
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-yellow-9 px-6 py-2 text-white">
                      $yellow-900
                    </td>
                    <td className="bg-yellow-9 px-6 py-2"></td>
                    <td className="bg-yellow-9 px-6 py-2 text-white">
                      #A57F02
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorSystem;
