import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 24px;
  width: 110px;
  height: 120px;
  padding: 12px;
  border-radius: ${({ theme }) => theme.units.border.radius};
  justify-content: space-between;
  background-color: #f6f6f6;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  /* font-size: 24px; */
`;

export const Description = styled(Label)`
  /* font-size: 14px; */
`;
