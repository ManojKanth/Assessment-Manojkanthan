import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  apiLoading: false,
};
export const commonSlice = createSlice({
  name: 'commonReducer',
  initialState,
  reducers: {
    setApiLoadingIndicator: (state, action) => {
      state.apiLoading = action.payload;
    },
  },
});

export const {setApiLoadingIndicator} = commonSlice.actions;

export default commonSlice.reducer;
