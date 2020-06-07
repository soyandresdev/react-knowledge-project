import React from 'react';
import isEmpty from 'lodash/isEmpty';
import FilterCourses from '@UI/Molecules/FilterCourses';
import CourseItem, { LoadingCourseItem } from '@UI/Molecules/CourseItem';
import Dropdown from '@UI/Molecules/Dropdown';
import { CoursesActions } from '@Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  Content,
  Aside,
  CourseList,
  Header,
  DropdownBox,
  PageInfo,
  ReactPaginateStyles as ReactPaginate,
  EmptyResult,
} from './styles';

function ResultCourse() {
  const dispatch = useDispatch();
  const { sortedBy, sortField, pagesIndex, pageSize } = useSelector(
    (state) => state.Courses.filter
  );
  const { data, dataFeatured, loading } = useSelector((state) => state.Courses.course);
  const totalCourses = data.totalItems + dataFeatured.totalItems;
  const courseLoading = new Array(5).fill().map((e, i) => {
    return { id: `${i}-loading` };
  });
  return (
    <Content>
      <Aside>
        <FilterCourses />
      </Aside>
      <CourseList>
        <Header>
          <div>
            <PageInfo>
              <strong>Page {pagesIndex}</strong> of <strong>{totalCourses} results</strong>
            </PageInfo>
          </div>
          <div>
            <DropdownBox>
              <p>Sorted by:</p>
              <div className="Select">
                <Dropdown
                  size="small"
                  theme="gray"
                  options={sortedBy}
                  value={sortField}
                  onChange={(value) => {
                    dispatch(CoursesActions.Creators.changeFilter({ sortField: value }));
                  }}
                />
              </div>
            </DropdownBox>
          </div>
        </Header>
        {loading && (
          <>
            {courseLoading.map((course, index) => (
              <LoadingCourseItem key={course.id || index.toString()} />
            ))}
          </>
        )}
        {!loading && (
          <>
            {isEmpty(data.items) && isEmpty(dataFeatured.items) && (
              <EmptyResult>
                <h2>Your search yielded no results</h2>
              </EmptyResult>
            )}
            {dataFeatured.items.map((course) => (
              <CourseItem key={course.id} data={{ ...course, isFeatured: true }} />
            ))}
            {data.items.map((course) => (
              <CourseItem key={course.id} data={{ ...course, isFeatured: false }} />
            ))}
            {!isEmpty(data.items) && !isEmpty(dataFeatured.items) && (
              <ReactPaginate
                onChange={(page) => {
                  dispatch(CoursesActions.Creators.changeFilter({ pagesIndex: page }));
                }}
                pageSize={pageSize}
                current={pagesIndex}
                total={totalCourses}
              />
            )}
          </>
        )}
      </CourseList>
    </Content>
  );
}

ResultCourse.propTypes = {};

export default ResultCourse;
