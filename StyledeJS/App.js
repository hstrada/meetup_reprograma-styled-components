import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { FlatButton, Typography } from './src/components';

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
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
