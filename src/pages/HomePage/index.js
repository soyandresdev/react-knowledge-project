import React from 'react';
import NavBar from '@UI/Molecules/NavBar';
import SearchCourse from '@UI/Organisms/SearchCourse';
import ResultCourse from '@UI/Organisms/ResultCourse';

const HomePage = () => (
  <div>
    <NavBar />
    <SearchCourse />
    <ResultCourse />
  </div>
);

export default HomePage;
