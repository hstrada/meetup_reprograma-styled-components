// components/OutlineButton/index.js

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  /* border-color: #2ed47b; */
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 1px;
  border-radius: 36px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 16px;
`;
