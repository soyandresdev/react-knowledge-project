import { createReducer } from 'reduxsauce';

import { CoursesActions } from '@Redux/actions';

// the initial state of this reducer
export const INITIAL_STATE = {
  filter: {
    city: [
      {
        label: 'Alabama',
        value: 'AL',
      },
      {
        label: 'Alaska',
        value: 'AK',
      },
      {
        label: 'American Samoa',
        value: 'AS',
      },
      {
        label: 'Arizona',
        value: 'AZ',
      },
      {
        label: 'Arkansas',
        value: 'AR',
      },
      {
        label: 'California',
        value: 'CA',
      },
      {
        label: 'Colorado',
        value: 'CO',
      },
      {
        label: 'Connecticut',
        value: 'CT',
      },
      {
        label: 'Delaware',
        value: 'DE',
      },
      {
        label: 'District Of Columbia',
        value: 'DC',
      },
      {
        label: 'Federated States Of Micronesia',
        value: 'FM',
      },
      {
        label: 'Florida',
        value: 'FL',
      },
      {
        label: 'Georgia',
        value: 'GA',
      },
      {
        label: 'Guam',
        value: 'GU',
      },
      {
        label: 'Hawaii',
        value: 'HI',
      },
      {
        label: 'Idaho',
        value: 'ID',
      },
      {
        label: 'Illinois',
        value: 'IL',
      },
      {
        label: 'Indiana',
        value: 'IN',
      },
      {
        label: 'Iowa',
        value: 'IA',
      },
      {
        label: 'Kansas',
        value: 'KS',
      },
      {
        label: 'Kentucky',
        value: 'KY',
      },
      {
        label: 'Louisiana',
        value: 'LA',
      },
      {
        label: 'Maine',
        value: 'ME',
      },
      {
        label: 'Marshall Islands',
        value: 'MH',
      },
      {
        label: 'Maryland',
        value: 'MD',
      },
      {
        label: 'Massachusetts',
        value: 'MA',
      },
      {
        label: 'Michigan',
        value: 'MI',
      },
      {
        label: 'Minnesota',
        value: 'MN',
      },
      {
        label: 'Mississippi',
        value: 'MS',
      },
      {
        label: 'Missouri',
        value: 'MO',
      },
      {
        label: 'Montana',
        value: 'MT',
      },
      {
        label: 'Nebraska',
        value: 'NE',
      },
      {
        label: 'Nevada',
        value: 'NV',
      },
      {
        label: 'New Hampshire',
        value: 'NH',
      },
      {
        label: 'New Jersey',
        value: 'NJ',
      },
      {
        label: 'New Mexico',
        value: 'NM',
      },
      {
        label: 'New York',
        value: 'NY',
      },
      {
        label: 'North Carolina',
        value: 'NC',
      },
      {
        label: 'North Dakota',
        value: 'ND',
      },
      {
        label: 'Northern Mariana Islands',
        value: 'MP',
      },
      {
        label: 'Ohio',
        value: 'OH',
      },
      {
        label: 'Oklahoma',
        value: 'OK',
      },
      {
        label: 'Oregon',
        value: 'OR',
      },
      {
        label: 'Palau',
        value: 'PW',
      },
      {
        label: 'Pennsylvania',
        value: 'PA',
      },
      {
        label: 'Puerto Rico',
        value: 'PR',
      },
      {
        label: 'Rhode Island',
        value: 'RI',
      },
      {
        label: 'South Carolina',
        value: 'SC',
      },
      {
        label: 'South Dakota',
        value: 'SD',
      },
      {
        label: 'Tennessee',
        value: 'TN',
      },
      {
        label: 'Texas',
        value: 'TX',
      },
      {
        label: 'Utah',
        value: 'UT',
      },
      {
        label: 'Vermont',
        value: 'VT',
      },
      {
        label: 'Virgin Islands',
        value: 'VI',
      },
      {
        label: 'Virginia',
        value: 'VA',
      },
      {
        label: 'Washington',
        value: 'WA',
      },
      {
        label: 'West Virginia',
        value: 'WV',
      },
      {
        label: 'Wisconsin',
        value: 'WI',
      },
      {
        label: 'Wyoming',
        value: 'WY',
      },
    ],
    profession: [
      { label: 'Occupational Therapist', value: '249' },
      { label: 'Occupational Therapist Assistant ', value: '250' },
      { label: 'Veterinarian ', value: '4340' },
      { label: 'Veterinarian Technician ', value: '4342' },
    ],

    sortedBy: [{ label: 'Relevance', value: 'RELEVANCE' }],
    sortField: { label: 'Relevance', value: 'RELEVANCE' },
    cityValue: { value: 'FL', label: 'Florida' },
    professionValue: { value: '249', label: 'Occupational Therapist' },
    search: '',
    courseType: 'CD_ANYTIME',
    deliveryType: '-1',
    subjectArea: 'anySubjectArea',
    pagesIndex: 1,
    pageSize: 10,
  },
  course: {
    data: {
      items: [],
      totalItems: 0,
    },
    dataFeatured: {
      items: [],
      totalItems: 0,
    },
    loading: true,
  },
};

// test state change [an example for a reducer function]
export const changeFilter = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    filter: {
      ...state.filter,
      ...action.payload,
    },
  };
};
export const changeCoursesData = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    course: {
      ...state.course,
      ...action.payload,
    },
  };
};

// map action types to the reducer functions
export const HANDLERS = {
  [CoursesActions.Types.CHANGE_FILTER]: changeFilter,
  [CoursesActions.Types.CHANGE_COURSES_DATA]: changeCoursesData,
};

export default createReducer(INITIAL_STATE, HANDLERS);
