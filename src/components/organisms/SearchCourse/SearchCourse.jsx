import React, { useCallback, useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import InputIcon from '@UI/Molecules/InputIcon';
import Tab from '@UI/Atoms/Tab';
import Dropdown from '@UI/Molecules/Dropdown';
import { CoursesActions } from '@Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { SearchCourseBox, Content, DropdownSection, TextFind, TabSection } from './styles';

const tabs = [{ name: 'Courses', active: true }, { name: 'Providers' }];
export default function SearchCourse() {
  const dispatch = useDispatch();
  const { city, profession, cityValue, professionValue, search } = useSelector(
    (state) => state.Courses.filter
  );
  const [filter, setFilter] = useState(search || '');
  const delayedFilter = useCallback(
    debounce((q) => {
      dispatch(CoursesActions.Creators.changeFilter({ search: q }));
    }, 500),
    []
  );

  useEffect(() => {
    delayedFilter(filter);
  }, [filter, delayedFilter]);

  return (
    <SearchCourseBox>
      <Content>
        <DropdownSection>
          <div>
            <TextFind>Find CE for a</TextFind>
          </div>
          <div className="dropdown">
            <Dropdown
              size="big"
              options={city}
              value={cityValue}
              onChange={(value) => {
                dispatch(CoursesActions.Creators.changeFilter({ cityValue: value }));
              }}
            />
          </div>
          <div className="dropdown">
            <Dropdown
              size="big"
              options={profession}
              value={professionValue}
              onChange={(value) => {
                dispatch(CoursesActions.Creators.changeFilter({ professionValue: value }));
              }}
            />
          </div>
        </DropdownSection>
        <div>
          <InputIcon
            placeholder="Search courses and providers"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
        </div>
        <TabSection>
          {tabs.map((tab) => (
            <Tab key={tab.name} {...tab} />
          ))}
        </TabSection>
      </Content>
    </SearchCourseBox>
  );
}
