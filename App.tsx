import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './src/store';
import { News } from './src/screens/News';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <News />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
