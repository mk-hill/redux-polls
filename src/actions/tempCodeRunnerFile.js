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