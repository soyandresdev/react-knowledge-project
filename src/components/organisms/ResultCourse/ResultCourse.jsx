import React from 'react';
import PropTypes from 'prop-types';
import FilterCourses from '@UI/Molecules/FilterCourses';
import CourseItem from '@UI/Molecules/CourseItem';
import Dropdown from '@UI/Molecules/Dropdown';
import { Content, Aside, CourseList, Header, DropdownBox, PageInfo } from './styles';

function ResultCourse(props) {
  return (
    <Content>
      <Aside>
        <FilterCourses />
      </Aside>
      <CourseList>
        <Header>
          <div>
            <PageInfo>
              <strong>Page 1</strong> of <strong>1790 results</strong>
            </PageInfo>
          </div>
          <div>
            <DropdownBox>
              <p>Sorted by:</p>
              <div className="Select">
                <Dropdown size="small" theme="gray" />
              </div>
            </DropdownBox>
          </div>
        </Header>
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CourseList>
    </Content>
  );
}

ResultCourse.propTypes = {};

export default ResultCourse;
