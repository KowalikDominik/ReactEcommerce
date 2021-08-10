import { createSelector } from "reselect";
import { RootState } from "../store";

const cardSelector = (state: RootState) => state.card;

export const itemsSelector = createSelector(cardSelector, (card) => card.items);
export const countSelector = createSelector(itemsSelector, (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0)
);
export const totalPriceSelector = createSelector(itemsSelector, (items) =>
  items.reduce((acc, item) => acc + item.price * item.quantity, 0)
);
export const cardHiddenSelector = createSelector(
  cardSelector,
  (card) => card.hidden
);
