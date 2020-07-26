import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

import { DataGrid, Grid } from './src/components';

import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Grid bgColor="#2ed47b">
          <Text>Hello World</Text>
        </Grid>
        <DataGrid />
        <DataGrid label="Market" description="182" />
        <DataGrid variant="secondary" label="Market" description="182" />

        <ThemeProvider theme={theme}>
          <DataGrid variant="secondary" label="Market" description="182" />
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
