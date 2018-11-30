import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import AddPoll from './AddPoll';
import Poll from './Poll';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading ? null : (
              <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/polls/:id" component={Poll} />
                <Route path="/add" component={AddPoll} />
              </div>
            )}
          </div>
        </>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
