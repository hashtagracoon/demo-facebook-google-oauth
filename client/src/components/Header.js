import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  renderLoginButton() {
    if(this.props.auth) {
      return (
        <div>
          <li>Hello { this.props.auth.name } !</li>
          <li><a href="/auth/api/logout">Logout</a></li>
        </div>
      );
    }
    else {
      return (
        <li><a href="/auth/google">Login</a></li>
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
