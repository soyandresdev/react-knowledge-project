import { all } from 'redux-saga/effects';
import CoursesSagas from './courses';

export default function* rootSaga() {
  // Add the imported sagas to the all method array
  yield all([...CoursesSagas]);
}
