import * as actionTypes from "../constants/actionTypes";

const initialState = {
  monsterList: [],
};

const monsterReducer = (state = initialState, action) => {
  // declare monsterList as a variable
  let monsterList;

  switch (action.type) {
    case actionTypes.ADD_MONSTER: {
      console.log(state.monsterList);

      // copy the monsterList
      monsterList = state.monsterList.slice();
      // push the payload into monsterList
      monsterList.push(action.payload);

      // return state with updated monsterList
      return {
        ...state,
        monsterList,
      };
    }

    default: {
      return state;
    }
  }
};

export default monsterReducer;
