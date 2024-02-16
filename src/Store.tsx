import commonSlice from './reducers/commonSlice';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = {
  common: commonSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
