import React from 'react';
import {Provider} from 'react-redux';
import ApplicationNavigator from './Navigators/Application';
import LoadingGlobalProvider from './Provider/LoadingProvider';
import PopupGlobalProvider from './Provider/PopupProvider';
import {store} from './Store';

const App = () => (
  <Provider store={store}>
    <LoadingGlobalProvider>
      <PopupGlobalProvider>
        <ApplicationNavigator />
      </PopupGlobalProvider>
    </LoadingGlobalProvider>
  </Provider>
);

export default App;
