import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from './styles';

function TabElt({ name, active }) {
  return <Tab active={active}>{name}</Tab>;
}

TabElt.defaultProps = {
  active: false,
};

TabElt.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default TabElt;
