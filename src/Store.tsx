import commonReducer from './reducers/commonReducer';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = {
  common: commonReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
