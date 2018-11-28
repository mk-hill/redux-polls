import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import polls from './polls';
import users from './users';
import authedUser from './authedUser';

export default combineReducers({
  users,
  polls,
  authedUser,
  loadingBar: loadingBarReducer,
});
