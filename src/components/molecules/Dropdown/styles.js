import styled from 'styled-components';

export const Box = styled.div`
  .Theme-transparent {
    .react-select__control {
      background: transparent;
      border: 1px solid #d3dbe7;
      border-radius: 3px;
      outline: none;
      box-shadow: none;
      text-decoration: none;
      padding: 5px 7px;
    }
    .react-select__single-value,
    .react-select__placeholder {
      color: white;
      font-size: 14px;
      font-weight: 600;
    }
    .react-select__indicator {
      color: white;
    }
  }
  .Theme-gray {
    .react-select__control {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.gray};
      border-radius: 3px;
      outline: none;
      box-shadow: none;
      text-decoration: none;
      padding: 2px 3px;
    }
    .react-select__single-value,
    .react-select__placeholder {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 14px;
      font-weight: 600;
    }
    .react-select__indicator {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
  .Dropdown.big {
    .react-select__single-value,
    .react-select__placeholder {
      font-size: 22px;
    }
  }
  .Dropdown.small {
    .react-select__single-value,
    .react-select__placeholder {
      font-size: 14px;
    }
  }
`;
