// components/Typography/styles.js

import styled from 'styled-components/native';

// 01
// export const Label = styled.Text``;

// components/Typography/styles.js
// 02
// export const Label = styled.Text`
//   color: #2ed47b;
// `;

// 03
// components/Typography/styles.js
// export const Label = styled.Text`
//   color: #2ed47b;
//   ${({ bold }) => bold && { 'font-weight': 'bold' }}
// `;

// 04
export const Label = styled.Text`
  color: #2ed47b;
  ${({ bold }) => bold && { 'font-weight': 'bold' }};
  font-size: 24px;
`;
