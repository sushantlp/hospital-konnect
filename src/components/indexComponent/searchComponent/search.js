import React from "react";

import { Dropdown, Grid, Icon, Container } from "semantic-ui-react";
import Spinner from "../../spinnerComponent";
import "semantic-ui-css/semantic.min.css";
import "./search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityLocalityList: [],
      cityList: [],
      localityList: [],
      cityName: "Bengaluru",
      localityName: "Jp Nagar"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cityLocality !== nextProps.cityLocality) {
      this.setState({ cityLocalityList: nextProps.cityLocality.cityLocality });
      this.createCityList(nextProps.cityLocality.cityLocality, "Bengaluru");
    }
  }

  // Create City List
  createCityList = (props, cityName) => {
    let cityArray = props.map(obj => {
      const city = {};
      city.key = obj.c_id;
      city.value = obj.c_name;
      city.text = obj.c_name;
      if (obj.c_name.toLowerCase() === cityName.toLowerCase())
        this.createLocalityList(obj.localities);
      return city;
    });

    this.setCityName(cityName);
    this.setState({
      cityList: cityArray
    });
  };

  // Create Locality List
  createLocalityList = props => {
    let localityArray = props.map(obj => {
      const locality = {};
      locality.key = obj.l_id;
      locality.value = obj.l_name;
      locality.text = obj.l_name;
      return locality;
    });

    this.setLocalityName(localityArray[0].value);
    this.setState({
      localityList: localityArray
    });
  };

  // Set Locality Name
  setLocalityName = name => {
    this.setState({
      localityName: name
    });
  };

  // Set City Name
  setCityName = name => {
    this.setState({
      cityName: name
    });
  };

  // On Locality Change
  onChangeLocality = (e, data) => {
    this.setLocalityName(data.value);
  };

  // On City Change
  onChangeCity = (e, data) => {
    this.setCityName(data.value);
    const bunch = this.state.cityLocalityList.filter(obj => {
      if (obj.c_name.toLowerCase() === data.value.toLowerCase()) return obj;
    });
    this.createLocalityList(bunch[0].localities);
  };

  render() {
    if (
      this.props.cityLocality.status === "START" ||
      this.props.cityLocality.status === "FAIL"
    )
      return <Spinner />;
    else if (
      this.props.wallImage.status === "START" ||
      this.props.wallImage.status === "FAIL"
    )
      return <Spinner />;
    return (
      <div
        style={{
          width: "auto",
          height: "500px",
          backgroundImage: `url(${this.props.wallImage.wallImage.bg_img})`,
          overflow: "hidden"
        }}
      >
        <Grid divided="vertically" style={{ marginTop: "15vh" }}>
          <Grid.Column>
            <h1 className="background-heading">Your home for health</h1>
          </Grid.Column>
        </Grid>

        <Container>
          <Grid stackable columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Dropdown
                  placeholder="City"
                  search
                  fluid
                  selection
                  style={{ height: "50px" }}
                  options={this.state.cityList}
                  value={this.state.cityName}
                  // text={this.state.cityValue}
                  onChange={(event, data) => this.onChangeCity(event, data)}
                  icon={
                    <Icon
                      name="map marker alternate"
                      style={{
                        marginRight: "-2vh",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder="Locality"
                  fluid
                  search
                  selection
                  style={{ height: "50px" }}
                  options={this.state.localityList}
                  value={this.state.localityName}
                  // text={this.state.localityValue}
                  onChange={(event, data) => this.onChangeLocality(event, data)}
                  icon={
                    <Icon
                      name="map marker alternate"
                      style={{
                        marginRight: "-2vh",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  }
                />
              </Grid.Column>

              <Grid.Column>
                <Dropdown
                  placeholder="Search"
                  fluid
                  search
                  selection
                  options={this.state.localityList}
                  style={{ height: "50px" }}
                  icon={
                    <Icon
                      name="search"
                      style={{
                        marginTop: "-1.5vh",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
