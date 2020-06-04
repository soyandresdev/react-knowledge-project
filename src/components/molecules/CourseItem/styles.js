import styled from 'styled-components';

export const Content = styled.article`
  display: flex;
  flex-direction: row;
  border: 1px solid #e6e8ec;
  margin-bottom: 10px;
  align-items: flex-start;
  padding: 16px;
`;

export const Figure = styled.figure`
  width: 200px;
  margin-right: 26px;
  img {
    width: 100%;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
export const Title = styled.h2`
  color: #1d2121;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  margin: 0;
  margin-bottom: 8px;
  word-break: break-word;
`;
export const Association = styled.span`
  color: #3eb784;
  font-weight: bolder;
  border: 1.3px solid #3eb784;
  font-size: 12px;
  padding: 3px 10px;
  -ms-flex-item-align: start;
  align-self: flex-start;
  margin-right: 1px;
`;
export const Category = styled.h3`
  display: block;
  color: #8ea7a7;
  font-size: 12px;
  font-weight: 400;
  word-break: break-all;
  margin-top: 10px;
`;
export const Details = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 10px;
  & > li {
    margin-right: 10px;
  }
  & > li > p {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #707b7b;
  }
  & > li > p > span {
    padding-top: 5px;
    margin-right: 5px;
  }
`;

export const TextInfo = styled.div`
  flex: 1;
`;
export const PriceAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 700;
  text-align: right;
  width: 100px;
  font-size: 20px;
  cursor: default;
`;
