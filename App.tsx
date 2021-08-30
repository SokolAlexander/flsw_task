import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './src/store';
import { News } from './src/screens/News';

const App = () => {
  return (
    <SafeAreaProvider>
    </SafeAreaProvider>
  );
};

export default App;
