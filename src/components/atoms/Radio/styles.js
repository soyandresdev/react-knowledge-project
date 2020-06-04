import styled from 'styled-components';

export const RadioFill = styled.div`
  background: ${({ theme }) => theme.colors.blueLight};
  width: 24px;
  height: 24px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;
  &::before {
    content: '';
    border-radius: 100%;
    border: 2px solid #bec6c6;
    background: #fafafa;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 1;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: '';
    border-radius: 100%;
    border: 2px solid #bec6c6;
    background: #fafafa;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;

export const Input = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:checked {
    & ~ ${RadioFill} {
      &::before {
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        transition: width 0.2s ease-out, height 0.2s ease-out;
        border: 2px solid ${({ theme }) => theme.colors.blueLight};
        background: ${({ theme }) => theme.colors.blueLight};
      }
      &::after {
        border: 2px solid ${({ theme }) => theme.colors.blueLight};
      }
    }
  }
`;

export const RadioBox = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;
