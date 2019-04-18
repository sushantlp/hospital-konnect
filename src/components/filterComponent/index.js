import React from "react";

import { Dropdown } from "semantic-ui-react";

import "./static/css/filter.css";

export default class Filter extends React.Component {
  gotoAA(value) {
    console.log("Hello-2");
    console.log(value);
    let dropdown = document.querySelector(".dropdown");
    console.log(dropdown);
    dropdown.addEventListener("click", function(event) {
      console.log(event);
      event.stopPropagation();
      dropdown.classList.toggle("is-active");
    });
  }

  gotoAAA(value) {
    console.log("Hello-1");
    console.log(value);
    let dropdown = document.querySelector(".dropdown");
    console.log(dropdown);
    dropdown.addEventListener("click", function(event) {
      console.log(event);
      event.stopPropagation();
      dropdown.classList.toggle("is-active");
    });
  }

  render() {
    return (
      <div class="panel-block">
        <div class="container">
          <label>Filter by</label>
          <div class="columns">
            <div class="column">
              <div class="field">
                <div class="control">
                  <div class="select">
                    <select>
                      <option>Price</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <div class="select">
                    <select>
                      <option>Availability</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <div class="select">
                    <select>
                      <option>Sort by</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <div class="select">
                    <select>
                      <option>More filters</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
