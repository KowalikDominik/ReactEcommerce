import { cardActionTypes } from "./cardTypes";

const INITIAL_STATE = {
  hidden: true,
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cardActionTypes.CARD_TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
      break;

    default:
      return state;
      break;
  }
};

export default cardReducer;
