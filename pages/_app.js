import '../styles/globals.css';

import { persistor, store } from '../lib/context/store';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
