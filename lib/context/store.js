import { configureStore, combineReducers } from '@reduxjs/toolkit';
import sessionSlice from './slices/sessionSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  session: sessionSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

//carga el estado de la aplicación con localStorage

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
