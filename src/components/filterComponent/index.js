import React from "react";

import "./static/css/filter.css";

export default class Filter extends React.Component {
  gotoAA() {
    let dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("click", function(event) {
      event.stopPropagation();
      dropdown.classList.toggle("is-active");
    });
  }

  render() {
    return (
      <div class="panel-block">
        <div class="container">
          <div class="columns">
            <div class="column">
              <p>Filter by : </p>
            </div>
            <div class="column">
              <div class="dropdown" onClick={() => this.gotoAA()}>
                <div class="dropdown-trigger">
                  <button
                    class="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu2"
                  >
                    <span>Price</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu1" role="menu">
                  <div class="dropdown-content">
                    <div class="dropdown-item">
                      <p>
                        You can insert <strong>any type of content</strong>
                        within the dropdown menu.
                      </p>
                    </div>
                    <hr class="dropdown-divider" />
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="dropdown" onClick={() => this.gotoAA()}>
                <div class="dropdown-trigger">
                  <button
                    class="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu2"
                  >
                    <span>Amenities</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu1" role="menu">
                  <div class="dropdown-content">
                    <div class="dropdown-item">
                      <p>
                        You can insert <strong>any type of content</strong>
                        within the dropdown menu.
                      </p>
                    </div>
                    <hr class="dropdown-divider" />
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="dropdown" onClick={() => this.gotoAA()}>
                <div class="dropdown-trigger">
                  <button
                    class="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu2"
                  >
                    <span>Open</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu1" role="menu">
                  <div class="dropdown-content">
                    <div class="dropdown-item">
                      <p>
                        You can insert <strong>any type of content</strong>
                        within the dropdown menu.
                      </p>
                    </div>
                    <hr class="dropdown-divider" />
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
