import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
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

function CourseItem({ data }) {
  const { price, course, hasPrice, isFeatured } = data;
  const totalHours =
    course?.components.reduce((act, component) => {
      if (act < component?.profession?.totalHours) {
        return component.profession.totalHours;
      }
      return act;
    }, 0) || 0;
  return (
    <Content>
      {course.featuredBanner && (
        <div>
          <Figure>
            <img
              src={`https://storage.cebroker.com/CEBroker/${course.featuredBanner}`}
              alt={course.name}
            />
          </Figure>
        </div>
      )}
      <InfoContent>
        <TextInfo>
          <Title>{course.name}</Title>
          {isFeatured && <Association>Feature</Association>}
          <Category>{course.provider.name}</Category>
          <div>
            <Details>
              <li>
                <p>
                  <span>
                    <Icons type="Clock" width="16" height="16" fill="#4c5656" />
                  </span>
                  {totalHours} Hours
                </p>
              </li>
              <li>
                <p>
                  <span>
                    <Icons type="Computer" width="16" height="16" fill="#4c5656" />
                  </span>
                  {course.deliveryMethod.description || ''}
                </p>
              </li>
            </Details>
          </div>
        </TextInfo>
        <PriceAction>
          <div>{hasPrice && <Price>{numeral(price).format('$0,0.00')}</Price>}</div>
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

CourseItem.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.objectOf([PropTypes.number, PropTypes.string]),
    course: PropTypes.object,
    hasPrice: PropTypes.bool,
    isFeatured: PropTypes.bool,
  }).isRequired,
};

export default CourseItem;
