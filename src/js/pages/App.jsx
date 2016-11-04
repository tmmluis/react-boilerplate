import React from "react";

import Nav from "../components/layout/Nav.jsx"

export default class App extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav location={location} />
        {this.props.children}
      </div>
    );
  }
}
