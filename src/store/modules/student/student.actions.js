/**
import { createNewStudent } from '~/store/modules/student/student.actions';
 * fetch list of Students
 */
export function fetchStudentsRequest(search = null) {
  return {
    type: '@student/FETCH_STUDENTS_REQUEST',
    search,
  };
}
export function fetchStudentsSuccess(data) {
  return {
    type: '@student/FETCH_STUDENTS_SUCCESS',
    payload: { data },
  };
}
export function fetchStudentsFailure() {
  return {
    type: '@student/FETCH_STUDENTS_FAILURE',
  };
}

/**
 * Delete Student
 */
export function deleteStudentRequest(id) {
  return {
    type: '@student/DELETE_STUDENT_REQUEST',
    id,
  };
}
export function deleteStudentSuccess(id) {
  return {
    type: '@student/DELETE_STUDENT_SUCCESS',
    payload: { id },
  };
}
export function deleteStudentFailure(error) {
  return {
    type: '@student/DELETE_STUDENT_FAILURE',
    error,
  };
}

/**
 *
 * Update student
 */
export function updateStudentRequest(id) {
  return {
    type: '@student/UPDATE_STUDENT_REQUEST',
    id,
  };
}
export function updateStudentSuccess(profile) {
  return {
    type: '@student/UPDATE_STUDENT_SUCCESS',
    payload: { profile },
  };
}
export function updateStudentFailure(error) {
  return {
    type: '@student/UPDATE_STUDENT_FAILURE',
    error,
  };
}

/**
 *
 * Create student
 */
export function createNewStudentRequest({
  name,
  email,
  birth,
  weight,
  height,
}) {
  return {
    type: '@student/CREATE_STUDENT_REQUEST',
    payload: {
      name,
      email,
      birth,
      weight,
      height,
    },
  };
}
export function createNewStudentSuccess(profile) {
  return {
    type: '@student/CREATE_STUDENT_SUCCESS',
    payload: { profile },
  };
}
export function createNewStudentFailure(error) {
  return {
    type: '@student/CREATE_STUDENT_FAILURE',
    error,
  };
}
