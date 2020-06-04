import { createSelector } from 'reselect';

// Select state namespace
const selectState = (state) => state.Courses;

// Get test state from the Courses state
const selectTest = () => createSelector(selectState, (Courses) => Courses?.testState);

export default { selectTest };
