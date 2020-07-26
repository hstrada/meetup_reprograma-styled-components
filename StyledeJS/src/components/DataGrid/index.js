import React from 'react';

import { Container, Label, Description } from './styles';

// 01
// const DataGrid = () => (
//   <Container>
//     <Label>Market</Label>
//     <Description>182</Description>
//   </Container>
// );

// 02
// const DataGrid = ({ label, description }) => {
//   return (
//     <Container>
//       <Label>{label}</Label>
//       <Description>{description}</Description>
//     </Container>
//   );
// };

import colors from '../../theme/colors';

const DataGrid = ({ label, description, variant = 'primary' }) => {
  const data = {
    primary: {
      bgColor: colors.persianBlue,
      labelColor: '#FFF',
      descriptionColor: '#FFF',
    },
    secondary: {
      bgColor: '#F5F7FB',
      labelColor: '#B2B2B2',
      descriptionColor: '#000',
    },
  };

  return (
    <Container bgColor={data[variant].bgColor}>
      <Label labelColor={data[variant].labelColor}>{label}</Label>
      <Description descriptionColor={data[variant].descriptionColor}>
        {description}
      </Description>
    </Container>
  );
};

export default DataGrid;
