import React from "react";

import { Dropdown, Grid, Icon, Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      localityList: [],
      cityName: "Bengaluru",
      localityName: "Jp Nagar"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cityLocality !== nextProps.cityLocality)
      this.createCityList(nextProps.cityLocality.cityLocality, "Bengaluru");
  }

  // Create City List
  createCityList = (props, cityName) => {
    let cityArray = props.map(obj => {
      const city = {};
      city.key = obj.c_id;
      city.value = obj.c_name;
      city.text = obj.c_name;
      if (obj.c_name === cityName) this.createLocalityList(obj.localities);
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
    console.log(e);
    console.log(data);
  };

  // On City Change
  onChangeCity = (e, data) => {
    console.log(e);
    console.log(data);

    this.setCityName();
  };

  render() {
    console.log(this.state);
    return (
      <div
        style={{
          width: "auto",
          height: "500px",
          backgroundImage:
            "url('https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1555316722/ballyhoo/BALLYHOO_WEBSITE/arseny-togulev-1393380-unsplash.jpg')",
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
