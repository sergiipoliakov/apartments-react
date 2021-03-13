import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
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
import counterButtonReducer from './counterButton';
import storage from 'redux-persist/lib/storage';

// import counterReducer from './counter/counter-reducer';
import { todosReducer } from './todos';
import { authReducer } from './auth';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  // logger,
];

// const counterPersistConfig = {
//   key: 'counter',
//   storage,
// };

// const todoPersistConfig = {
//   key: 'todos',
//   storage,
//   blacklist: ['filter'],
// };
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  // counter: persistReducer(counterPersistConfig, counterReducer),
  auth: persistReducer(authPersistConfig, authReducer),
  todos: todosReducer,
  counterButton: counterButtonReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
