import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, { persistor } from '../../../application/store';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const StoreProvider = ({children}: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
