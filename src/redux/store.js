import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

// const persistConfig = {
//   key: 'hello',
//   storage,
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const counterPersistConfig = {
  key: 'counter',
  storage,
};

const todoPersistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  counter: persistReducer(counterPersistConfig, counterReducer),
  todos: persistReducer(todoPersistConfig, todosReducer),
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
