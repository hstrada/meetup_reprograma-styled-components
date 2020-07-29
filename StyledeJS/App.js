import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { FlatButton, Typography, OutlineButton } from './src/components';

import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ padding: 16 }}>
          <Typography />
          <Typography bold />
          <View style={{ marginTop: 16 }}>
            <FlatButton />
          </View>
          <ThemeProvider theme={theme}>
            <View style={{ marginTop: 16 }}>
              <OutlineButton />
            </View>
          </ThemeProvider>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
