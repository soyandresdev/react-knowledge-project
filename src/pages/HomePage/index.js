/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import NavBar from '@UI/Molecules/NavBar';
import SearchCourse from '@UI/Organisms/SearchCourse';
import ResultCourse from '@UI/Organisms/ResultCourse';
import { useDispatch, useSelector } from 'react-redux';
import { CoursesActions } from '@Redux/actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const {
    sortField,
    cityValue,
    professionValue,
    search,
    courseType,
    pageSize,
    pagesIndex,
  } = useSelector((state) => state.Courses.filter);
  useEffect(() => {
    console.log('value Change');
    dispatch(CoursesActions.Creators.getDataCoursesPages());
  }, [sortField, cityValue, professionValue, search, courseType, pageSize, pagesIndex]);

  return (
    <div>
      <NavBar />
      <SearchCourse />
      <ResultCourse />
    </div>
  );
};

export default HomePage;
