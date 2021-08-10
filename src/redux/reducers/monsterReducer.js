import * as actionTypes from "../constants/actionTypes";

const initialState = {
  monsterList: [],
};

const monsterReducer = (state = initialState, action) => {
  // declare monsterList as a variable
  let monsterList;

  switch (action.type) {
    case actionTypes.ADD_MONSTER: {
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
    case actionTypes.SET_AMOUNT: {
      state.monsterList.map((monster) => {
        if (monster.id === action.payload.input.id) {
          monster.hp = action.payload.input.hp;
        }
        console.log(monster.hp);
      });
    }

    default: {
      return state;
    }
  }
};

export default monsterReducer;
