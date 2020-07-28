import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Typography } from './src/components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Typography />
      </SafeAreaView>
    </>
  );
};

export default App;
