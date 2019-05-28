import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import Address from "../addressComponent";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

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
      localityArray: [],

      all_data: {},
      package_data: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ambulanceDistance !== nextProps.ambulanceDistance) {
      if (nextProps.ambulanceDistance.status === "SUCCESS") {
        this.setState({
          loading: !this.state.loading
        });

        sessionStorage.setItem(
          "AMBULANCE_AMOUNT",
          nextProps.ambulanceDistance.ambulanceDistance.amount
        );

        NotificationManager.success("Successful", "Successful");

        this.props.history.push("/package-booking/");
      } else if (nextProps.ambulanceDistance.status === "FAIL") {
        this.setState({
          loading: !this.state.loading
        });

        sessionStorage.setItem("AMBULANCE_AMOUNT", 1000);

        NotificationManager.error("Something wrong our side", "Error");

        this.props.history.push("/package-booking/");
      }
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);

    const allData = sessionStorage.getItem("ALL_DATA");
    const packageData = sessionStorage.getItem("PACKAGE_DATA");
    const currentAddress = sessionStorage.getItem("CURRENT_ADDRESS");

    const cityLocality = sessionStorage.getItem("CITY_LOCALITY");

    this.updateAllDataState(JSON.parse(allData));
    this.updatePackageState(JSON.parse(packageData));

    if (currentAddress !== null)
      this.initialCurrentAddress(JSON.parse(currentAddress));
    this.initialCityLocality(JSON.parse(cityLocality));
    this.checkType(JSON.parse(allData), JSON.parse(packageData));
  }

  checkType = (all, packages) => {
    if (all.p_cat === 1)
      if (packages.a_title !== undefined) this.updateAmbulanceState(true);
      else if (all.p_cat === 2) this.updateAmbulanceState(true);
  };

  updateAllDataState = all => {
    this.setState({
      all_data: all
    });
  };

  updatePackageState = packageData => {
    this.setState({
      package_data: packageData
    });
  };

  updateAmbulanceState = bool => {
    this.setState({
      ambulance: bool
    });
  };

  initialCurrentAddress = currentAddress => {
    this.setState({
      addressOne: currentAddress.address_one,
      addressTwo: currentAddress.address_two,
      landmark: currentAddress.landmark,
      cityId: currentAddress.city_id,
      localityId: currentAddress.locality_id
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
      cityId: city[0].c_id,
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
      localityArray: locality,
      localityId: locality[0].l_id
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

  onChangeAddressOne = e => {
    if (this.state.addressOneError)
      this.setState({
        addressOneError: !this.state.addressOneError
      });

    if (e.target.value === "")
      this.setState({
        c_fname: "",
        addressOneError: !this.state.addressOneError
      });
    else
      this.setState({
        addressOne: e.target.value
      });
  };

  onChangeAddressTwo = e => {
    if (this.state.addressTwoError)
      this.setState({
        addressTwoError: !this.state.addressTwoError
      });

    if (e.target.value === "")
      this.setState({
        addressTwo: "",
        addressTwoError: !this.state.addressTwoError
      });
    else
      this.setState({
        addressTwo: e.target.value
      });
  };

  onChangeLandmark = e => {
    if (e.target.value === "")
      this.setState({
        landmark: ""
      });
    else
      this.setState({
        landmark: e.target.value
      });
  };

  onPrevClick = () => {
    this.setState({
      loading: true
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

      this.setState({
        loading: false
      });
    } else {
      const currentAddress = {
        address_one: this.state.addressOne,
        address_two: this.state.addressTwo,
        landmark: this.state.landmark,
        city_id: this.state.cityId,
        locality_id: this.state.localityId
      };

      sessionStorage.setItem("CURRENT_ADDRESS", JSON.stringify(currentAddress));

      if (
        (this.state.all_data.p_cat === 1 &&
          this.state.package_data.a_id !== undefined) ||
        this.state.all_data.p_cat === 2
      ) {
        const destinationAddress = sessionStorage.getItem(
          "DESTINATION_ADDRESS"
        );

        if (destinationAddress !== null)
          this.initialDestinationAddress(JSON.parse(destinationAddress));
        else this.intitalEmptyDestinationAddress();

        this.setState({
          loading: false,
          prev: false,
          next: true
        });
      } else this.props.history.push("/package-booking/");
    }
  };

  initialDestinationAddress = destinationAddress => {
    this.setState({
      addressOne: destinationAddress.address_one,
      addressTwo: destinationAddress.address_two,
      landmark: destinationAddress.landmark,
      cityId: destinationAddress.city_id,
      localityId: destinationAddress.locality_id
    });
  };

  intitalEmptyDestinationAddress = () => {
    this.setState({
      addressOne: "",
      addressTwo: "",
      landmark: ""
    });
  };

  onNextClick = () => {
    this.setState({
      loading: true
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

      this.setState({
        loading: false
      });
    } else {
      const destinationAddress = {
        address_one: this.state.addressOne,
        address_two: this.state.addressTwo,
        landmark: this.state.landmark,
        city_id: this.state.cityId,
        locality_id: this.state.localityId
      };

      let currentAddress = sessionStorage.getItem("CURRENT_ADDRESS");
      currentAddress = JSON.parse(currentAddress);

      sessionStorage.setItem(
        "DESTINATION_ADDRESS",
        JSON.stringify(destinationAddress)
      );

      const destinationApi = {
        address_line_1: this.state.addressOne,
        address_line_2: this.state.addressTwo,
        landmark: this.state.landmark,
        city_id: this.state.cityId,
        locality_id: this.state.localityId
      };

      const currentApi = {
        address_line_1: currentAddress.address_one,
        address_line_2: currentAddress.address_two,
        landmark: currentAddress.landmark,
        city_id: currentAddress.city_id,
        locality_id: currentAddress.locality_id
      };

      this.props.getambulanceDistance(
        this.state.all_data.p_id,
        this.state.package_data.a_id,
        currentApi,
        destinationApi
      );
    }
  };

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
            onChangeAddressOne={this.onChangeAddressOne}
            onChangeAddressTwo={this.onChangeAddressTwo}
            onChangeLandmark={this.onChangeLandmark}
          />
        ) : null}

        {this.state.next ? (
          <Address
            addressHeader="Destination Address"
            state={this.state}
            onChangeCity={this.onChangeCity}
            onChangeLocality={this.onChangeLocality}
            onClickApi={this.onNextClick}
            onChangeAddressOne={this.onChangeAddressOne}
            onChangeAddressTwo={this.onChangeAddressTwo}
            onChangeLandmark={this.onChangeLandmark}
          />
        ) : null}

        <NotificationContainer />
        <Footer />
      </React.Fragment>
    );
  }
}
