import React from "react";
import _ from "lodash";

import "bulma-checkradio";
import "./filter.css";

export default class Filter extends React.Component {
  render() {
    if (this.props.filterList.status === "START") return <div />;
    else if (this.props.filterList.status === "FAIL") return <div />;

    if (_.isEmpty(this.props.filterList.filterList)) return <div />;

    const object = this.props.filterList.filterList;

    console.log(object)
    return (
      <div className="filter-container">
       <div
        class="panel-block"
        style={{
          cursor: this.props.transistor ? "not-allowed" : "auto",
          pointerEvents: this.props.transistor ? "none" : "auto"
        }}
      > 
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="">
                {/* <img
                  src="https://getbedtimestories.com/assets/images/app-icon-df78e144.png?1553506572"
                  alt="Hello"
                /> */}
              </a>
            </div>

            <div id="navbar-menu-id" class="navbar-menu">
              <div class="navbar-start">
              <div class="navbar-item">
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">Amenities</a>
                  <div class="navbar-dropdown">
                    {object.amenities.map((obj, key) => {
                       const name = obj.label.replace(/ /g, "-").toLowerCase()
                      return (
                        <div class="field" key={key}>
                          <input class="is-checkradio" id={name} type="checkbox" name={name} style={{marginLeft:"1em"}} onChange={event => this.props.filterAmenitiesPush(event,obj)}/>
                          <label for={name} style={{marginLeft:"1em"}}>{obj.label}</label>
                        </div>
                      );
                    })}
                     <hr class="navbar-divider" />
                    {/* <div class="has-text-centered">
                    <a class="button" style={{backgroundColor:"#6e7498", color:"white", float:"right", marginRight:"0.5em"}}>APPLY</a>
                    </div> */}
                  </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">Price</a>
                  <div class="navbar-dropdown">
                    {object.registration_charges.map((obj, key) => {
                      const name = obj.label.replace(/ /g, "-").toLowerCase()
                      return (
                        <div class="field" key={key}>
                          <input class="is-checkradio" id={name} type="checkbox" name={name} style={{marginLeft:"1em"}} onChange={event => this.props.filterPricesPush(event,obj)}/>
                          <label for={name} style={{marginLeft:"1em"}}>{obj.label}</label>
                        </div>
                      );
                    })}
                    <hr class="navbar-divider" />
                     {/* <div class="has-text-centered">
                      <a class="button" style={{backgroundColor:"#6e7498", color:"white", float:"right",marginRight:"0.5em"}}>APPLY</a>
                    </div> */}
                  </div>
                </div>
                </div>
              </div>
              {this.props.price_checkbox.length === 0 && this.props.amenities_checkbox.length === 0 ? null : <div class="navbar-end"> <div class="navbar-item"><p class="subtitle is-4" style={{float:"right"}}> <a class="button" style={{backgroundColor:"#ff3860", color:"white"}}>CLEAR ALL</a></p> </div> </div> }
              
            </div>  
          </div>
        </nav> 
       </div> 
      </div>
    );
  }
}
