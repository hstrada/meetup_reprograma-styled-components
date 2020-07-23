import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { styledeTheme } from './src/theme';

import { Typography } from './src/components';

import styled from 'styled-components/native';

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: 'gray',
    marginBottom: 20,
  },
  label: {
    backgroundColor: 'yellow',
    marginBottom: 20,
  },
});

const Container = styled.View`
  background-color: blue;
  width: 50px;
  height: 50px;
`;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* without styled-components */}
        <Text style={10 === 10 ? styles.label : styles.disabled}>
          Hello World
        </Text>

        {/* with styled-components */}
        <ThemeProvider theme={styledeTheme}>
          <Typography />
        </ThemeProvider>

        <Container />
      </SafeAreaView>
    </>
  );
};

export default App;
