import styled from 'styled-components/native';

// export const Container = styled.View`
//   background-color: #2de47b;
// `;

export const Container = styled.View`
  background-color: ${({ bgColor }) => bgColor || 'yellow'};
`;
