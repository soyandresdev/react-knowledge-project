import React from 'react';
import FilterCourses from '@UI/Molecules/FilterCourses';
import CourseItem from '@UI/Molecules/CourseItem';
import PropTypes from 'prop-types';
import { Content, Aside, CourseList } from './styles';

function ResultCourse(props) {
  return (
    <Content>
      <Aside>
        <FilterCourses />
      </Aside>
      <CourseList>
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CourseList>
    </Content>
  );
}

ResultCourse.propTypes = {};

export default ResultCourse;
