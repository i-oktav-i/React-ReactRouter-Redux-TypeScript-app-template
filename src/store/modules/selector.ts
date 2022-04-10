import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type SelectorState = {
  value: 'first' | 'second' | 'third'
}

const initState: SelectorState = {
  value: 'first',
};

const fetchThird = createAsyncThunk<SelectorState['value']>(
  'FETCH_THIRD',
  async () => {
    const p = new Promise<SelectorState['value']>(res => { setTimeout(() => res('third'), 1000); });

    return await p;
  },
);

const selectorModule = createSlice({
  name:         'selector',
  initialState: initState,
  /* eslint-disable no-param-reassign */
  reducers:     {
    selectFirst(state) {
      state.value = 'first';
    },
    selectSecond(state) {
      state.value = 'second';
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchThird.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
  /* eslint-enable no-param-reassign */
});

export const selectorReducer = selectorModule.reducer;
export const { selectFirst, selectSecond } = selectorModule.actions;
export { fetchThird };
