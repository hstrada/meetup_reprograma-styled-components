import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import {
  ActionButton,
  FlatButton,
  // FlatButtonWithLabel,
  Typography,
  OutlineButton,
} from './src/components';

import { ThemeProvider } from 'styled-components';

import themeDoAmor from './src/theme';

import colors from './src/theme/colors';
import units from './src/theme/units';

const App = () => {
  console.log(colors);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ padding: 16 }}>
          <Typography />
          <Typography bold />
          <View style={{ marginTop: 16 }}>
            <FlatButton />
            {/* <FlatButtonWithLabel label="Register" /> */}
          </View>
          <ThemeProvider theme={{ ...colors, ...units }}>
            <View style={{ marginTop: 16 }}>
              <OutlineButton />
              {/* <ActionButton /> */}
            </View>
          </ThemeProvider>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
