import { call, takeLatest, put, select } from 'redux-saga/effects';
import { CoursesActions } from '@Redux/actions';
import Api from '@Config/api';
import { getApiRoute } from '@Routes';

const getCoursesPageReducer = (state) => state.Courses;

// Get Course SAGA
function* getDatCourses() {
  try {
    yield put(CoursesActions.Creators.changeCoursesData({ loading: true }));
    const {
      filter: {
        sortField,
        cityValue,
        professionValue,
        search,
        courseType,
        // deliveryType,
        // subjectArea,
        pageSize,
        pagesIndex,
      },
    } = yield select(getCoursesPageReducer);
    const url = yield call(getApiRoute, 'Courses', 'GET_COURSES', {
      pagesIndex,
      pageSize,
      state: cityValue.value,
      sortField: sortField.value,
      profession: professionValue.value,
      courseType,
      term: search,
    });
    const { data } = yield call(Api.get, url);
    yield put(CoursesActions.Creators.changeCoursesData({ data, loading: false }));
  } catch (e) {
    console.error(e);
  }
}

// Get Course Featured SAGA
function* getDatCoursesFeatured() {
  try {
    yield put(CoursesActions.Creators.changeCoursesData({ loading: true }));
    const {
      filter: {
        sortField,
        cityValue,
        professionValue,
        search,
        courseType,
        // deliveryType,
        // subjectArea,
        pageSize,
        pagesIndex,
      },
    } = yield select(getCoursesPageReducer);
    const url = yield call(getApiRoute, 'Courses', 'GET_COURSES_FEATURED', {
      pagesIndex,
      pageSize,
      state: cityValue.value,
      sortField: sortField.value,
      profession: professionValue.value,
      courseType,
      term: search,
    });
    const { data } = yield call(Api.get, url);
    yield put(CoursesActions.Creators.changeCoursesData({ dataFeatured: data, loading: false }));
  } catch (e) {
    console.error(e);
  }
}

// Get Course Pages All
function* getDatCoursesPages() {
  try {
    yield put(CoursesActions.Creators.getDataCourses());
    yield put(CoursesActions.Creators.getDataCoursesFeatured());
  } catch (e) {
    console.error(e);
  }
}

// Add saga functions to the exportable array
export default [
  takeLatest(CoursesActions.Types.GET_DATA_COURSES, getDatCourses),
  takeLatest(CoursesActions.Types.GET_DATA_COURSES_FEATURED, getDatCoursesFeatured),
  takeLatest(CoursesActions.Types.GET_DATA_COURSES_PAGES, getDatCoursesPages),
];
