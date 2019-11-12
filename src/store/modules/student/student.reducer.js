import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function reducer(
  state = INITIAL_STATE,
  { type, payload, error }
) {
  return produce(state, draft => {
    switch (type) {
      case '@student/FETCH_STUDENTS_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@student/FETCH_STUDENTS_SUCCESS': {
        const { students } = payload.data;
        draft.loading = false;
        draft.data = students.reduce((acc, s) => {
          acc[s.id] = s;
          return acc;
        }, {});

        break;
      }

      case '@student/FETCH_STUDENTS_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@student/DELETE_STUDENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/DELETE_STUDENT_SUCCESS': {
        draft.loading = false;
        delete draft.data[payload.id];
        break;
      }
      case '@student/DELETE_STUDENT_FAILURE': {
        draft.loading = false;
        draft.error = error;
        break;
      }

      case '@student/CREATE_STUDENT_SUCCESS': {
        draft.loading = true;
        draft.data[payload.id] = payload;
        break;
      }

      default:
    }
  });
}
