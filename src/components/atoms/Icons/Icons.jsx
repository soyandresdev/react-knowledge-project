import React from 'react';
import PropTypes from 'prop-types';

import Search from './Types/Search';
import ArrowUp from './Types/ArrowUp';
import ArrowDown from './Types/ArrowDown';
import Filter from './Types/Filter';
import TurnRight from './Types/TurnRight';
import Clock from './Types/Clock';
import Computer from './Types/Computer';

export default function Icons({ type, ...resProps }) {
  return (
    <>
      {{
        Search: <Search {...resProps} />,
        ArrowUp: <ArrowUp {...resProps} />,
        ArrowDown: <ArrowDown {...resProps} />,
        Filter: <Filter {...resProps} />,
        TurnRight: <TurnRight {...resProps} />,
        Clock: <Clock {...resProps} />,
        Computer: <Computer {...resProps} />,
      }[`${type}`] || <div />}
    </>
  );
}

Icons.propTypes = {
  type: PropTypes.oneOf(['Search', 'ArrowUp', 'ArrowDown', 'Filter']).isRequired,
};
