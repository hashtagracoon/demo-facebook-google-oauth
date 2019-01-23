import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Welcome from './Welcome';

const Content = () => {
  return (
    <h2>* Facebook and Google SDK Demo Content Page *</h2>
  );
}

class App extends Component {

  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={ Welcome } />
            <Route path="/welcome" component={ Content } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
