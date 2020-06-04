/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import CoursesReducer from './courses';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const createReducer = (history, injectedReducers = {}) =>
  combineReducers({
    router: connectRouter(history),
    // [START] Reducers
    Courses: CoursesReducer,
    // [END] Reducers
    ...injectedReducers,
  });

export default createReducer;
