import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return <div>{this.props.loading ? <p>Loading</p> : <Dashboard />}</div>;
  }
}

const mapStatetoProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStatetoProps)(App);
