import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import AddPoll from './AddPoll';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading ? null : <AddPoll />}
      </div>
    );
  }
}

const mapStatetoProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStatetoProps)(App);
