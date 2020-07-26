import styled from 'styled-components/native';

// 01
// export const Container = styled.View`
//   width: 105px;
//   height: 130px;
//   background-color: #3873fc;
// `;

// 02
// export const Container = styled.View`
//   width: 105px;
//   height: 130px;
//   background-color: #3873fc;
//   justify-content: space-between;
//   padding-left: 12px;
//   padding-right: 12px;
//   padding-top: 24px;
//   padding-bottom: 24px;
//   border-radius: 18px;
// `;

// export const Label = styled.Text`
//   color: #fff;
//   font-size: 12px;
// `;

// export const Description = styled(Label)`
//   font-weight: bold;
//   font-size: 24px;
// `;

// 03
// export const Container = styled.View`
//   width: 105px;
//   height: 130px;
//   background-color: ${({ bgColor }) => bgColor};
//   justify-content: space-between;
//   padding-left: 12px;
//   padding-right: 12px;
//   padding-top: 24px;
//   padding-bottom: 24px;
//   border-radius: 18px;
// `;

// export const Label = styled.Text`
//   color: ${({ labelColor }) => labelColor};
//   font-size: 12px;
// `;

// export const Description = styled.Text`
//   color: ${({ descriptionColor }) => descriptionColor};
//   font-weight: bold;
//   font-size: 24px;
// `;

export const Container = styled.View`
  width: 105px;
  height: 130px;
  background-color: ${({ bgColor, theme }) => theme.colorsOptions[bgColor]};
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-radius: 18px;
`;

export const Label = styled.Text`
  color: ${({ labelColor }) => labelColor};
  font-size: 12px;
`;

export const Description = styled.Text`
  color: ${({ descriptionColor }) => descriptionColor};
  font-weight: bold;
  font-size: 24px;
`;
