import { configureStore } from '@reduxjs/toolkit';

import { selectorReducer } from './modules/selector';

const store = configureStore({
  reducer: {
    selector: selectorReducer,
  },
});

export type AppStore = typeof store
export default store;
