import React from "react";
import { Link } from 'react-router'

export default class Nav extends React.Component {
  render() {
    return (
      <ul class="nav nav-tabs">
        <li role="presentation" activeClassName="active">
          <Link to="/">Home</Link>
        </li>
        <li role="presentation" activeClassName="active">
          <Link to="/Profile">Profile</Link>
        </li>
        <li role="presentation" activeClassName="active">
          <Link to="/Messages">Messages</Link>
        </li>
      </ul>
    );
  }
}
