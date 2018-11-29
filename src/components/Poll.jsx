/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPercentage } from '../utils/helpers';

const getVoteKeys = () => ['aVotes', 'bVotes', 'cVotes', 'dVotes'];

export class Poll extends Component {
  handleAnswer = answer => {
    const { poll, authedUser } = this.props;
    this.answered = true;
    console.log('Add answer: ', answer);
  };

  render() {
    const { poll, vote, authorAvatar } = this.props;
    const totalVotes = getVoteKeys().reduce((total, key) => total + poll[key].length, 0);
    if (poll === null) return <p>This poll does not exist.</p>;
    return (
      <div className="poll-container">
        <h1 className="question">{poll.question}</h1>
        <div className="poll-author">
          By <img src={authorAvatar} alt="Author's avatar" />
        </div>
        <ul>
          {['aText', 'bText', 'cText', 'dText'].map(key => {
            const voteCount = poll[`${key[0]}Votes`].length;
            return (
              <li
                onClick={() => {
                  if (vote === null && !this.answered) {
                    this.handleAnswer(key[0]);
                  }
                }}
                key={key}
                className={`option ${vote === key[0] ? 'chosen' : ''}`}
              >
                {vote === null ? (
                  poll[key]
                ) : (
                  <div className="result">
                    <span>{poll[key]}</span>
                    <span>
                      {getPercentage(voteCount, totalVotes)}% ({voteCount})
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
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
  const vote = getVoteKeys().reduce((vote, key) => {
    // Vote is first char if !== null
    if (vote !== null) {
      return vote;
    }

    // If user has already voted, poll state will have user
    return poll[key].includes(authedUser) ? key[0] : vote;
  }, null);

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL,
  };
};

export default connect(mapStateToProps)(Poll);
