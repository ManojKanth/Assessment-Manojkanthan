import {ACTIVITYINDICATOR} from '../types/reduxTypes';

export const setApiLoadingIndicator = (data: any) => {
  return {
    type: ACTIVITYINDICATOR,
    payload: data,
  };
};
