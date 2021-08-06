import { cardActionTypes } from "./cardTypes";

export const cardToggleHidden = () => ({
  type: cardActionTypes.CARD_TOGGLE_HIDDEN,
});

export const addItem = (item) => ({
  type: cardActionTypes.ADD_ITEM,
  payload: item,
});
