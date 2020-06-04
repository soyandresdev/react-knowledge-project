import { call, takeLatest } from 'redux-saga/effects';
import { CoursesActions } from '@Redux/actions';
import { getPageRoute, getApiRoute } from '@Routes';

// Change test saga function example
function* changeTestSaga() {
  try {
    const response = yield call(getPageRoute, 'Courses', 'TEST_PARAM', { what: 'hi' });
    const responseAPI = yield call(getApiRoute, 'Courses', 'TEST_PARAM', { what: 'hi' });
    // const response = 'test saga triggered';
    yield call(console.log, response);
    yield call(console.log, responseAPI);
  } catch (e) {
    console.error(e);
  }
}

// Add saga functions to the exportable array
export default [takeLatest(CoursesActions.Types.CHANGE_TEST, changeTestSaga)];
