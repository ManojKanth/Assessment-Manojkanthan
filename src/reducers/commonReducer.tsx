import {ACTIVITYINDICATOR} from '../types/reduxTypes';

const initialState = {
  apiLoading: false,
};

const commonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIVITYINDICATOR:
      return {
        ...state,
        apiLoading: action.payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
