import React from 'react';

import { Container } from './styles';

const Grid = ({ children, bgColor }) => (
  <Container bgColor={bgColor}>{children}</Container>
);

export default Grid;
