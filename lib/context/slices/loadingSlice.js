import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialState,
  reducers: {
    changeIsLoading: (state = initialState) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    changeNotLoading: (state = initialState) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});

export const { changeIsLoading, changeNotLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
