import React from 'react';

import { Container, Label } from './styles';

// components/OutlineButton/index.js

const OutlineButton = () => {
  return (
    <Container onPress={() => console.log('hello')}>
      <Label>Login</Label>
    </Container>
  );
};

export default OutlineButton;
