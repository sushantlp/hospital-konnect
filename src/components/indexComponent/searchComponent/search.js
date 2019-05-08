import React from "react";

import { Dropdown, Grid, Icon, Container } from "semantic-ui-react";
import Spinner from "../../spinnerComponent";
import "semantic-ui-css/semantic.min.css";
import "./search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywordList: [],
      cityList: [],
      localityList: [],
      cityName: "Bengaluru",
      localityName: "Jp Nagar"
      // cityId: 0,
      // localityId: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cityLocality !== nextProps.cityLocality) {
      this.createCityList(nextProps.cityLocality.cityLocality, "Bengaluru");
    }

    if (this.props.keywordSearch !== nextProps.keywordSearch) {
      this.createKeywordList(nextProps.keywordSearch.keywordSearch);
    }
  }

  // Create Keyword Search List
  createKeywordList = props => {
    let keywordArray = props.map((obj, index) => {
      const keyword = {};
      keyword.key = index;
      keyword.key_id = obj.key_id;
      keyword.cat_id = obj.cat_id;
      keyword.type = obj.type;
      keyword.value = obj.key;
      keyword.text = obj.key;

      return keyword;
    });

    this.setState({
      keywordList: keywordArray
    });
  };

  // Create City List
  createCityList = (props, cityName) => {
    let cityArray = props.map(obj => {
      const city = {};
      city.key = obj.c_id;
      city.value = obj.c_name;
      city.text = obj.c_name;
      city.locality = obj.localities;
      if (obj.c_name.toLowerCase() === cityName.toLowerCase())
        this.createLocalityList(obj.localities, cityName);

      return city;
    });

    this.setCityName(cityName, 1);
    this.setState({
      cityList: cityArray
    });
  };

  // Create Locality List
  createLocalityList = (props, cityName) => {
    let localityArray = props.map(obj => {
      const locality = {};
      locality.key = obj.l_id;
      locality.value = obj.l_name;
      locality.text = obj.l_name;
      return locality;
    });

    const cityUrl = cityName.replace(/ /g, "-").toLowerCase();
    const localityUrl = localityArray[0].value.replace(/ /g, "-").toLowerCase();

    // Url Change
    this.props.parentProps.history.replace("/" + cityUrl + "/" + localityUrl);

    this.setLocalityName(localityArray[0].value, localityArray[0].key);
    this.setState({
      localityList: localityArray
    });
  };

  // Set Locality Name
  setLocalityName = (name, id) => {
    this.props.updateLocalityState(id);

    this.setState({
      localityName: name
    });
  };

  // Set City Name
  setCityName = (name, id) => {
    this.props.updateCityState(id);

    this.setState({
      cityName: name
    });
  };

  // On Locality Change
  onChangeLocality = (e, data) => {
    const bunch = data.options.filter(obj => {
      if (obj.value.toLowerCase() === data.value.toLowerCase()) return obj;
    });

    const localityUrl = data.value.replace(/ /g, "-").toLowerCase();

    // Url Change
    this.props.parentProps.history.push(
      "/" + this.props.parentProps.match.params.city + "/" + localityUrl
    );

    this.setLocalityName(data.value, bunch[0].key);
  };

  // On City Change
  onChangeCity = (e, data) => {
    const bunch = data.options.filter(obj => {
      if (obj.value.toLowerCase() === data.value.toLowerCase()) return obj;
    });

    if (bunch[0].key !== this.props.parentState.cityId) {
      this.setCityName(data.value, bunch[0].key);
      this.createLocalityList(bunch[0].locality, data.value);
      this.props.changeCityApiCall(bunch[0].key);
    }
  };

  // On Search Keyword Change
  onChangeKeyword = (e, data) => {
    const bunch = data.options.filter(obj => {
      if (obj.value.toLowerCase() === data.value.toLowerCase()) return obj;
    });

    const categoryUrl = data.value.replace(/ /g, "-").toLowerCase();

    if (bunch[0].type !== 3) {
      // Url Change
      this.props.parentProps.history.push({
        pathname: `${
          this.props.parentProps.match.params.locality
        }/${categoryUrl}`,
        search: `?city=${this.props.parentState.cityId}&locality=${
          this.props.parentState.localityId
        }&type=${bunch[0].type}&category=${bunch[0].cat_id}&q=${
          bunch[0].key_id
        }`,
        state: { data: bunch }
      });
    } else {
      let category = "";

      if (bunch[0].cat_id === 1) category = "hospital";
      else if (bunch[0].cat_id === 2) category = "ambulance";
      else if (bunch[0].cat_id === 3) category = "equipment";
      else category = "nursing";

      this.props.tripToDetailView(bunch[0], category, bunch[0].cat_id, true);
    }
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
    else if (
      this.props.keywordSearch.status === "START" ||
      this.props.keywordSearch.status === "FAIL"
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
                  options={this.state.keywordList}
                  onChange={(event, data) => this.onChangeKeyword(event, data)}
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
