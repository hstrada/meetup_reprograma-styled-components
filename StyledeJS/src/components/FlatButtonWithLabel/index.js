import React from 'react';

import { Container, Label } from './styles';

// components/FlatButton/index.js

const FlatButton = ({ label }) => {
  return (
    <Container onPress={() => console.log('hello')}>
      <Label>{label}</Label>
    </Container>
  );
};

export default FlatButton;
