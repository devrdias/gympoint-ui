import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns'
import api from '~/services/api';
import {
  fetchStudentsFailure,
  fetchStudentsSuccess,
  deleteStudentSuccess,
  deleteStudentFailure,
  createNewStudentSuccess,
  createNewStudentFailure,
} from './student.actions';

export function* fetchStudentsAsync({ search }) {
  try {
    const response = yield call(
      api.get,
      'students',
      search ? { params: { q: search } } : null
    );
    yield put(fetchStudentsSuccess(response.data));
  } catch (error) {
    toast.error('Error trying to fetch Students list');
    yield put(fetchStudentsFailure());
  }
}

export function* deleteStudentAsync({ id }) {
  try {
    const response = yield call(api.delete, `students/${id}`);

    yield put(deleteStudentSuccess(id));
  } catch (error) {
    toast.error('Error trying to delete Student.');
    yield put(deleteStudentFailure(error.message));
  }
}

export function* createStudentAsync({ payload }) {
  try {
    const response = yield call(api.post, 'students', {
      name: payload.name,
      email: payload.email,
      birth: parseISO(payload.birth),
      weight: payload.weight,
      height: payload.height,
    });
    debugger;

    yield put(createNewStudentSuccess());
  } catch (error) {
    debugger;
    // toast.error('Error trying to create Student.');
    toast.error(error.message);
    yield put(createNewStudentFailure(error.message));
  }
}

export default all([
  takeLatest('@student/FETCH_STUDENTS_REQUEST', fetchStudentsAsync),
  takeLatest('@student/DELETE_STUDENT_REQUEST', deleteStudentAsync),
  takeLatest('@student/CREATE_STUDENT_REQUEST', createStudentAsync),
]);
