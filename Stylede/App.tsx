import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {styledeTheme} from './src/theme';

import styled from 'styled-components';

const Typography = styled(Text)`
  background-color: ${({theme}) => theme.colors.primary};
`;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ThemeProvider theme={styledeTheme}>
          <Typography>Hello World</Typography>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
