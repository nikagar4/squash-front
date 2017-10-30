import React from 'react';
import { NavLink } from 'react-router-dom';

export default class MenuItem extends React.Component {
  render() {
    return (
      <li className="wan-menu-item">
        <NavLink to={this.props.link} activeClassName="active">
          {this.props.name}
        </NavLink>
      </li>
    );
  }
}
