import { combineReducers } from 'redux';
import auth from './auth/auth.reducer';
import user from './user/user.reducer';
import student from './student/student.reducer';

export default combineReducers({
  auth,
  user,
  student,
});
