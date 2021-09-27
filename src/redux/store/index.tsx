import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import RootReducer from '../reducers/root-reducer.reducer';

const store = createStore(RootReducer, applyMiddleware(thunk));
const ReduxStoreProvider = ({
  children,
}: React.ReactChild | React.ReactNode | JSX.Element | any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxStoreProvider;
