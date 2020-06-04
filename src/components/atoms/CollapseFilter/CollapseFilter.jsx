/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import Collapse from '@kunukn/react-collapse';

import PropTypes from 'prop-types';
import { Content, Header, Title, Children } from './styles';

function CollapseFilter({ name, open, children, prefix }) {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <Content>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <Title>{name}</Title>
        {prefix && prefix(isOpen)}
      </Header>
      <Collapse isOpen={isOpen}>
        <Children>{children}</Children>
      </Collapse>
    </Content>
  );
}

CollapseFilter.defaultProps = {
  open: true,
  name: 'String Name',
  children: null,
  prefix: null,
};

CollapseFilter.propTypes = {
  open: PropTypes.bool,
  name: PropTypes.string,
  children: PropTypes.any,
  prefix: PropTypes.any,
};

export default CollapseFilter;
