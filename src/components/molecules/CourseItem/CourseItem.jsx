import React from 'react';
import PropTypes from 'prop-types';
import Button from '@UI/Atoms/Button';
import Icons from '@UI/Atoms/Icons';
import {
  Content,
  Figure,
  InfoContent,
  TextInfo,
  PriceAction,
  Title,
  Category,
  Association,
  Details,
  Price,
} from './styles';

function CourseItem(props) {
  return (
    <Content>
      <div>
        <Figure>
          <img
            src="https://storage.cebroker.com/CEBroker/e52c09d6-bb27-45f8-b31d-c0ca94217ec6"
            alt=""
          />
        </Figure>
      </div>
      <InfoContent>
        <TextInfo>
          <Title>
            Legal, Ethical & Practical Business Management Skills for the Independent Therapist
          </Title>
          <Association>Feature</Association>
          <Category>INDEPENDENT THERAPIST ALLIANCE</Category>
          <div>
            <Details>
              <li>
                <p>
                  <span>
                    <Icons type="Clock" width="16" height="16" fill="#4c5656" />
                  </span>
                  2 Hours
                </p>
              </li>
              <li>
                <p>
                  <span>
                    <Icons type="Computer" width="16" height="16" fill="#4c5656" />
                  </span>
                  Computer Based traini
                </p>
              </li>
            </Details>
          </div>
        </TextInfo>
        <PriceAction>
          <div>
            <Price>$ 24.00</Price>
          </div>
          <div>
            <Button>
              <span>
                <Icons type="TurnRight" fill="#4c5656" />
              </span>
            </Button>
          </div>
        </PriceAction>
      </InfoContent>
    </Content>
  );
}

CourseItem.propTypes = {};

export default CourseItem;
