import React, { Component } from 'react';
import { connect } from 'react-redux';

class Welcome extends Component {

  renderContent() {
    if(!this.props.auth) {
      return (
        <h3>Warning: Once you login with Facebook, your likes list would be shown here!</h3>
      );
    }
    else if(this.props.auth.provider === 'google') {
      return (
        <h3>Hello { this.props.auth.name }, you have logged in with Google!</h3>
      );
    }
    else if(this.props.auth.provider === 'facebook') {
      return (
        <div>
          <h3>Hello { this.props.auth.name }!</h3>
          {
            this.props.auth.likes.map((el) => {
              return (<p>{ el }</p>);
            })
          }
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        { this.renderContent() }
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Welcome);
