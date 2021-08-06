import { cardActionTypes } from "./cardTypes";

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cardActionTypes.CARD_TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
      break;
    case cardActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
      break;
  }
};

export default cardReducer;
