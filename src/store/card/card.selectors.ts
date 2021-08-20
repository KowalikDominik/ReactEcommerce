import { createSelector } from "reselect";
import { RootState } from "../store";

const cardSelector = (state: RootState) => state.card;

export const itemsSelector = createSelector(cardSelector, (card) =>
  card.items.length > 0 ? card.items : null
);
export const countSelector = createSelector(itemsSelector, (items) =>
  items ? items.reduce((acc, item) => acc + item.quantity, 0) : 0
);
export const totalPriceSelector = createSelector(itemsSelector, (items) =>
  items ? items.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0
);
export const cardHiddenSelector = createSelector(
  cardSelector,
  (card) => card.hidden
);
