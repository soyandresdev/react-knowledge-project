import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    changeTest: ['changed'],
  },
  { prefix: 'Courses/' }
);

export default {
  Creators,
  Types,
};
