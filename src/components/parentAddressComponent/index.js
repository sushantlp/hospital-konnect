import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import Address from "../addressComponent";

import "./parent-address.css";

export default class ParentAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressOneError: false,
      addressTwoError: false,
      loading: false,
      ambulance: false,
      prev: true,
      next: false,

      addressOne: "",
      addressTwo: "",
      landmark: "",
      cityId: 0,
      localityId: 0,

      rawArray: [],
      cityArray: [],
      localityArray: []
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);

    const allData = sessionStorage.getItem("ALL_DATA");
    const packageData = sessionStorage.getItem("PACKAGE_DATA");
    const currentAddress = sessionStorage.getItem("CURRENT_ADDRESS");
    const destinationAddress = sessionStorage.getItem("DESTINATION_ADDRESS");
    const cityLocality = sessionStorage.getItem("CITY_LOCALITY");

    if (currentAddress !== null) this.initialCurrentAddress(currentAddress);
    this.initialCityLocality(JSON.parse(cityLocality));
    this.checkType(JSON.parse(allData), JSON.parse(packageData));
  }

  checkType = (all, packages) => {
    if (all.p_cat === 1)
      if (packages.a_title !== undefined) this.updateAmbulanceState(true);
      else if (all.p_cat === 2) this.updateAmbulanceState(true);
  };

  updateAmbulanceState = bool => {
    this.setState({
      ambulance: bool
    });
  };

  initialCurrentAddress = currentAddress => {
    this.setState({
      addressOne: currentAddress.address.address_one,
      addressTwo: currentAddress.address.address_two,
      landmark: currentAddress.address.landmark,
      cityId: currentAddress.address.city_id,
      localityId: currentAddress.address.locality_id
    });
  };

  initialCityLocality = cityLocality => {
    const city = cityLocality.map((json, index) => {
      let obj = {};
      obj.c_id = json.c_id;
      obj.c_name = json.c_name;
      return obj;
    });
    this.createLocality(cityLocality[0].localities);

    this.setState({
      cityArray: city,
      rawArray: cityLocality
    });
  };

  createLocality = json => {
    const locality = json.map((obj, index) => {
      let object = {};
      object.l_id = obj.l_id;
      object.l_name = obj.l_name;
      object.c_id = obj.c_id;

      return object;
    });

    this.setState({
      localityArray: locality
    });
  };

  onChangeLocality = e => {
    this.setState({
      localityId: parseInt(e.target.value, 10)
    });
  };

  onChangeCity = e => {
    const filterArray = this.state.rawArray.filter(
      raw => raw.c_id === parseInt(e.target.value, 10)
    );

    this.createLocality(filterArray[0].localities);
    this.setState({
      cityId: parseInt(e.target.value, 10)
    });
  };

  onPrevClick = () => {
    this.setState({
      loading: !this.state.loading
    });

    if (this.state.addressOne === "" || this.state.addressTwo === "") {
      if (this.state.addressOne === "")
        this.setState({
          addressOneError: true
        });

      if (this.state.addressTwo === "")
        this.setState({
          addressTwoError: true
        });
    }
  };

  onNextClick = () => {};

  render() {
    return (
      <React.Fragment>
        <Header />

        {this.state.prev ? (
          <Address
            addressHeader="Current Address"
            state={this.state}
            onChangeCity={this.onChangeCity}
            onChangeLocality={this.onChangeLocality}
            onClickApi={this.onPrevClick}
          />
        ) : null}

        {this.state.next ? (
          <Address
            addressHeader="Destination Address"
            state={this.state}
            onChangeCity={this.onChangeCity}
            onChangeLocality={this.onChangeLocality}
            onClickApi={this.onNextClick}
          />
        ) : null}

        <Footer />
      </React.Fragment>
    );
  }
}
