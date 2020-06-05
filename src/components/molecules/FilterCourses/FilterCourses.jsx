import React from 'react';
import CollapseFilter from '@UI/Atoms/CollapseFilter';
import Icons from '@UI/Atoms/Icons';
import Radio from '@UI/Atoms/Radio';
import { useDispatch, useSelector } from 'react-redux';
import { CoursesActions } from '@Redux/actions';
import { Aside, Header, TitleFilter, ListItemRadio, ViewMore, ListCollapseFilter } from './styles';

function FilterCourses() {
  const dispatch = useDispatch();
  const { courseType, deliveryType, subjectArea } = useSelector((state) => state.Courses.filter);
  return (
    <Aside>
      <Header>
        <TitleFilter>
          <span>
            <Icons type="Filter" fill="#4c5656" />
          </span>
          Filter Course results
        </TitleFilter>
      </Header>
      <div>
        <ListCollapseFilter>
          <li>
            <CollapseFilter
              name="Course type"
              prefix={(isOpen) => {
                return <Icons type={isOpen ? 'ArrowUp' : 'ArrowDown'} fill="#4c5656" />;
              }}
            >
              <ListItemRadio>
                <li>
                  <div>
                    <Radio
                      name="course-type"
                      checked={courseType === 'CD_ANYTIME'}
                      onChange={() => {
                        dispatch(
                          CoursesActions.Creators.changeFilter({ courseType: 'CD_ANYTIME' })
                        );
                      }}
                    />
                    <span>Self paced</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio
                      name="course-type"
                      checked={courseType === 'CD_LIVE'}
                      onChange={() => {
                        dispatch(CoursesActions.Creators.changeFilter({ courseType: 'CD_LIVE' }));
                      }}
                    />
                    <span>Live</span>
                  </div>
                </li>
              </ListItemRadio>
            </CollapseFilter>
          </li>
          <li>
            <CollapseFilter
              name="Delivery type"
              prefix={(isOpen) => {
                return <Icons type={isOpen ? 'ArrowUp' : 'ArrowDown'} fill="#4c5656" />;
              }}
            >
              <ListItemRadio>
                <li>
                  <div>
                    <Radio
                      name="delivery-type"
                      checked={deliveryType === '-1'}
                      onChange={() => {
                        dispatch(CoursesActions.Creators.changeFilter({ deliveryType: '-1' }));
                      }}
                    />
                    <span>Any delivery type</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio
                      name="delivery-type"
                      checked={deliveryType === 'CBT'}
                      onChange={() => {
                        dispatch(
                          CoursesActions.Creators.changeFilter({
                            deliveryType: 'CBT',
                          })
                        );
                      }}
                    />
                    <span>Computer-Based Training</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio
                      name="delivery-type"
                      checked={deliveryType === 'CORRESP'}
                      onChange={() => {
                        dispatch(
                          CoursesActions.Creators.changeFilter({
                            deliveryType: 'CORRESP',
                          })
                        );
                      }}
                    />
                    <span>Correspondence</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio
                      name="delivery-type"
                      checked={deliveryType === 'MAILED'}
                      onChange={() => {
                        dispatch(
                          CoursesActions.Creators.changeFilter({
                            deliveryType: 'MAILED',
                          })
                        );
                      }}
                    />
                    <span>Mailed Material</span>
                  </div>
                </li>
              </ListItemRadio>
              <ViewMore>View More</ViewMore>
            </CollapseFilter>
          </li>
          <li>
            <CollapseFilter
              name="Subject area"
              prefix={(isOpen) => {
                return <Icons type={isOpen ? 'ArrowUp' : 'ArrowDown'} fill="#4c5656" />;
              }}
            >
              <ListItemRadio>
                <li>
                  <div>
                    <Radio
                      name="subject-area"
                      checked={subjectArea === 'anySubjectArea'}
                      onChange={() => {
                        dispatch(
                          CoursesActions.Creators.changeFilter({
                            subjectArea: 'anySubjectArea',
                          })
                        );
                      }}
                    />
                    <span>Any subject area</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio
                      name="subject-area"
                      checked={subjectArea === 'hivAids'}
                      onChange={() => {
                        dispatch(
                          CoursesActions.Creators.changeFilter({
                            subjectArea: 'hivAids',
                          })
                        );
                      }}
                    />
                    <span>HIV/AIDS</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio
                      name="subject-area"
                      checked={subjectArea === 'endonLiveCareandPalliative'}
                      onChange={() => {
                        dispatch(
                          CoursesActions.Creators.changeFilter({
                            subjectArea: 'endonLiveCareandPalliative',
                          })
                        );
                      }}
                    />
                    <span>End-of-live Care And Palliative Health Care</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio
                      name="subject-area"
                      checked={subjectArea === 'DomesticViolence'}
                      onChange={() => {
                        dispatch(
                          CoursesActions.Creators.changeFilter({
                            subjectArea: 'DomesticViolence',
                          })
                        );
                      }}
                    />
                    <span>Domestic Violence</span>
                  </div>
                </li>
              </ListItemRadio>
              <ViewMore>View More</ViewMore>
            </CollapseFilter>
          </li>
        </ListCollapseFilter>
      </div>
    </Aside>
  );
}

FilterCourses.propTypes = {};

export default FilterCourses;
