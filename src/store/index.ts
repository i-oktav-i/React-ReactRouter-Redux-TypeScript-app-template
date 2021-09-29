import { configureStore } from '@reduxjs/toolkit';

import { selectorReducer } from './modules/selector';

export const store = configureStore({
  reducer: {
    selector: selectorReducer,
  },
});

export type AppStore = typeof store
