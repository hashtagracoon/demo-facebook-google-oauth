import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  renderLoginButton() {
    if(this.props.auth) {
      return (
        <li><a href="#">Hello { this.props.auth.name } !</a></li>
      );
    }
    else {
      return (
        <li><a href="#">Login</a></li>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Facebook and Google SDK Demo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            { this.renderLoginButton() }
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
