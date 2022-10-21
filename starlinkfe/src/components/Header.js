import { Component } from "react";
import starlink_logo from "../assets/images/starlink_logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={starlink_logo} className="App-logo" alt="logo" />
        <p className="title">StarLink Tracker</p>
      </header>
    );
  }
}

export default Header;
