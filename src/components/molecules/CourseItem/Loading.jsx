import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Icons from '@UI/Atoms/Icons';
import {
  Content,
  Figure,
  InfoContent,
  TextInfo,
  PriceAction,
  Title,
  Category,
  Details,
  Price,
} from './styles';

function LoadingCourseItem() {
  return (
    <Content>
      <div>
        <Figure>
          <Skeleton height={75} width={150} />
        </Figure>
      </div>
      <InfoContent>
        <TextInfo>
          <Title>
            {' '}
            <Skeleton height={16} />
          </Title>
          <Skeleton height={14} />
          <Category>
            {' '}
            <Skeleton height={16} />
          </Category>
          <div>
            <Details>
              <li>
                <p>
                  <span>
                    <Icons type="Clock" width="16" height="16" fill="#4c5656" />
                  </span>
                  <Skeleton height={14} width={80} />
                </p>
              </li>
              <li>
                <p>
                  <span>
                    <Icons type="Computer" width="16" height="16" fill="#4c5656" />
                  </span>
                  <Skeleton height={14} width={80} />
                </p>
              </li>
            </Details>
          </div>
        </TextInfo>
        <PriceAction>
          <div>
            <Price>
              <Skeleton height={22} width={60} />
            </Price>
          </div>
          <div>
            <Skeleton height={22} width={50} />
          </div>
        </PriceAction>
      </InfoContent>
    </Content>
  );
}

export default LoadingCourseItem;
