import * as actionTypes from "../constants/actionTypes";

// actions also get from actionTypes
// both reducer and actions.js get from action types
export const increment = () => ({
  type: actionTypes.INCREMENT,
});

export const decrement = () => ({
  type: actionTypes.DECREMENT,
});

export const add_monster = () => ({
  type: actionTypes.ADD_MONSTER,
  payload: {
    hp: 0,
    id: Date.now(),
  },
});

export const set_amount = (input) => ({
  type: actionTypes.SET_AMOUNT,
  payload: {
    input,
  },
});
