import { createSelector } from "reselect";
import { RootState } from "../store";

export const itemsSelector = createSelector(
  (state: RootState) => state.card,
  (card) => card.items
);
export const countSelector = createSelector([itemsSelector], (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0)
);
