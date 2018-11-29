import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Poll extends Component {
  render() {
    return (
      <div className="poll-container">
        <p>{JSON.stringify(this.props)}</p>
      </div>
    );
  }
}

// Second param = current props
const mapStateToProps = ({ authedUser, polls, users }, { match }) => {
  const { id } = match.params;
  const poll = polls[id];
  if (!poll) return { poll: null };

  // Check for user vote based on poll props returned from api
  // Will yield a, b, c, d, or null
  const vote = ['aVotes', 'bVotes', 'cVotes', 'dVotes'].reduce((vote, key) => {
    // Vote is first char if !== null
    if (vote !== null) return vote[0];

    // If user has already voted, poll state will have user
    return poll[key].includes(authedUser) ? key : vote;
  }, null);

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL,
  };
};

export default connect(mapStateToProps)(Poll);
