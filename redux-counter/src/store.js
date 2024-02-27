import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer, // Assuming counterReducer is a slice reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    /* other middleware here if needed */
  ),
});

export default store;
