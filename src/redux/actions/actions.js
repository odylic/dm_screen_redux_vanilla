import * as actionTypes from "../constants/actionTypes";

// actions also get from actionTypes
// both reducer and actions.js get from action types
export const increment = () => ({
  type: actionTypes.INCREMENT,
});

export const decrement = () => ({
  type: actionTypes.DECREMENT,
});
