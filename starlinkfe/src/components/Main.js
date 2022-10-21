import { Component } from "react";
import { Row, Col, message } from "antd";
import axios from "axios";

import SatSetting from "./SatSetting";
import SatelliteList from "./SatelliteList";
import {
  SAT_API_KEY,
  STARLINK_CATEGORY,
  NEARBY_SATELLITE,
  BASE_URL,
} from "../constants";
import WorldMap from "./WorldMap";

class Main extends Component {
  state = {
    setting: {},
    satInfo: {},
    satList: [],
    isLoadingList: false,
  };

  satelliteListKey = 0;

  showNearbySatellite = (setting) => {
    this.satelliteListKey++;
    this.setState({
      setting: setting,
      isLoadingList: true,
    });
    this.fetchSatellite(setting);
  };

  fetchSatellite = (setting) => {
    const { latitude, longitude, altitude, radius } = setting;
    const url = `${BASE_URL}/${NEARBY_SATELLITE}/${latitude}/${longitude}/${altitude}/${radius}/${STARLINK_CATEGORY}/&apiKey=${SAT_API_KEY}`;

    axios
      .get(url)
      .then((res) => {
        this.setState({
          satInfo: res.data,
          isLoadingList: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoadingList: false,
        });
        message.error(error.message);
      });
  };

  showMap = (selected) => {
    this.satelliteListKey++;
    this.setState({
      satList: selected,
    });
  };

  render() {
    const { satInfo, isLoadingList, satList, setting } = this.state;

    return (
      <Row className="main">
        <Col span={8} className="left-side">
          <SatSetting onShow={this.showNearbySatellite} />
          <SatelliteList
            key={this.satelliteListKey}
            satInfo={satInfo}
            isLoad={isLoadingList}
            onShowMap={this.showMap}
          />
        </Col>
        <Col span={16} className="right-side">
          <WorldMap satData={satList} observerData={setting} />
        </Col>
      </Row>
    );
  }
}

export default Main;
