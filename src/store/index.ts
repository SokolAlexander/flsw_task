import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { newsReducer } from './news/reducer';
import { newsSaga } from './news/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  newsReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(newsSaga);
