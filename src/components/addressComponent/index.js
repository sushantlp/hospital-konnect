import React from "react";
import "./address.css";

const AddressComponent = props => {
  return (
    <div class="container">
      <div className="header">
        <h1>{props.addressHeader}</h1>
      </div>

      <div className="form">
        <section class="section">
          <div class="columns">
            <div class="column is-6 is-offset-3">
              <div class="field">
                <div class="control has-icons-left has-icons-right">
                  <input
                    class={
                      props.state.addressOneError
                        ? "input is-large is-danger"
                        : "input is-large"
                    }
                    type="text"
                    placeholder="Address one"
                    onChange={props.onChangeAddressOne}
                    value={props.state.addressOne}
                  />
                  <span class="icon is-small is-left">
                    <img src="https://img.icons8.com/wired/25/000000/worldwide-location.png" />
                  </span>
                </div>

                {props.state.addressOneError ? (
                  <p class="help is-danger">Address one mandatory</p>
                ) : null}
              </div>

              {/* <p class="help is-danger">First name is mandatory</p> */}
            </div>
          </div>

          <hr className="spacer is-0" />

          <div class="columns">
            <div class="column is-6 is-offset-3">
              <div class="field">
                <div class="control has-icons-left has-icons-right">
                  <input
                    class={
                      props.state.addressTwoError
                        ? "input is-large is-danger"
                        : "input is-large"
                    }
                    type="text"
                    placeholder="Address two"
                    onChange={props.onChangeAddressTwo}
                    value={props.state.addressTwo}
                  />
                  <span class="icon is-small is-left">
                    <img src="https://img.icons8.com/wired/25/000000/worldwide-location.png" />
                  </span>
                </div>

                {props.state.addressTwoError ? (
                  <p class="help is-danger">Address two mandatory</p>
                ) : null}
              </div>
            </div>
          </div>

          <hr className="spacer is-0" />

          <div class="columns">
            <div class="column is-6 is-offset-3">
              <div class="field">
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input is-large"
                    type="text"
                    placeholder="Landmark"
                    onChange={props.onChangeLandmark}
                    value={props.state.landmark}
                  />
                  <span class="icon is-small is-left">
                    <img src="https://img.icons8.com/ios/25/000000/palace.png" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="spacer is-0" />

          <div class="columns">
            <div class="column is-6 is-offset-3">
              <div class="field">
                <div class="control has-icons-left">
                  <div class="select is-large">
                    <select onChange={event => props.onChangeCity(event)}>
                      {props.state.cityArray.map((obj, index) => {
                        return (
                          <option key={obj.c_id} value={obj.c_id}>
                            {obj.c_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div class="icon is-small is-left">
                    <img src="https://img.icons8.com/ios/25/000000/city-filled.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="spacer is-0" />

          <div class="columns">
            <div class="column is-6 is-offset-3">
              <div class="field">
                <div class="control has-icons-left">
                  <div class="select is-large">
                    <select onChange={event => props.onChangeLocality(event)}>
                      {props.state.localityArray.map((obj, index) => {
                        return (
                          <option key={obj.l_id} value={obj.l_id}>
                            {obj.l_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div class="icon is-small is-left">
                    <img src="https://img.icons8.com/ios/25/000000/city-filled.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="spacer is-2" />

          <div class="columns">
            <div class="column is-6 is-offset-3">
              <button
                class={
                  props.state.loading
                    ? "button is-large is-loading is-fullwidth"
                    : "button is-large is-fullwidth"
                }
                onClick={() => props.onClickApi()}
              >
                NEXT
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddressComponent;
