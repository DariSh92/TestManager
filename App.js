import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import StackNavigator from './navigation/StackNavigator';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <StackNavigator />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;

