/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import CalculateView from '@/views/CalculateView';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <CalculateView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'grey',
  }
});

export default App;
