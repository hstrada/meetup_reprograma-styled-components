import React from 'react';

import { Container, Label } from './styles';

// components/FlatButton/index.js

const FlatButton = () => {
  return (
    <Container onPress={() => console.log('hello')}>
      <Label>Login</Label>
    </Container>
  );
};

export default FlatButton;
