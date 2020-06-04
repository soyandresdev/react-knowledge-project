import React from 'react';
import PropTypes from 'prop-types';
import CollapseFilter from '@UI/Atoms/CollapseFilter';
import Icons from '@UI/Atoms/Icons';
import Radio from '@UI/Atoms/Radio';
import { Aside, Header, TitleFilter, ListItemRadio, ViewMore } from './styles';

function FilterCourses(props) {
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
        <ul>
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
                    <Radio name="course-type" />
                    <span>Self paced</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio name="course-type" />
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
                    <Radio name="delivery-type" />
                    <span>Any delivery type</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio name="delivery-type" />
                    <span>Computer-Based Training</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio name="delivery-type" />
                    <span>Correspondence</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio name="delivery-type" />
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
                    <Radio name="subject-area" />
                    <span>Any subject area</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio name="subject-area" />
                    <span>HIV/AIDS</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio name="subject-area" />
                    <span>End-of-live Care And Palliative Health Care</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Radio name="subject-area" />
                    <span>Domestic Violence</span>
                  </div>
                </li>
              </ListItemRadio>
              <ViewMore>View More</ViewMore>
            </CollapseFilter>
          </li>
        </ul>
      </div>
    </Aside>
  );
}

FilterCourses.propTypes = {};

export default FilterCourses;
