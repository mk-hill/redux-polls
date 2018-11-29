import { showLoading, hideLoading } from 'react-redux-loading';
import { savePoll } from '../utils/api';

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';

export const receivePolls = polls => ({ type: RECEIVE_POLLS, polls });

const addPoll = poll => ({ type: ADD_POLL, poll });

export const handleAddPoll = poll => (dispatch, getState) => {
  const { authedUser } = getState();
  dispatch(showLoading());
  return savePoll({
    ...poll,
    author: authedUser,
  })
    .then(completedPoll => dispatch(addPoll(completedPoll)))
    .then(() => dispatch(hideLoading()));
};
