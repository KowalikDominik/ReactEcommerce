import { cardActionTypes } from "./cardTypes";
import { addItemToCard } from "./cardUtils";

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
    case cardActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCard(state.items, action.payload),
      };
    default:
      return state;
  }
};

export default cardReducer;
