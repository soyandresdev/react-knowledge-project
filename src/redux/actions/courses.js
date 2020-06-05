import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    changeFilter: ['payload'],
    changeCoursesData: ['payload'],
    getDataCourses: [],
    getDataCoursesFeatured: [],
    getDataCoursesPages: [],
  },
  { prefix: 'Courses/' }
);

export default {
  Creators,
  Types,
};
