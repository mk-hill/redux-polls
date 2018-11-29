import { showLoading, hideLoading } from 'react-redux-loading';
import { savePollAnswer } from '../utils/api';

export const ADD_ANSWER = 'ADD_ANSWER';

const addAnswer = ({ authedUser, id, answer }) => ({
  type: ADD_ANSWER,
  authedUser,
  id,
  answer,
});

export const handleAddAnswer = answerData => (dispatch) => {
  dispatch(showLoading());
  return savePollAnswer(answerData)
    .then(() => dispatch(addAnswer(answerData)))
    .then(dispatch(hideLoading()));
};
