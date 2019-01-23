import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Facebook and Google SDK Demo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
