import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { addItemType, ICardItem, ICardState } from "../../interfaces";
import { addItemToCard, decreaseItemQuantity } from "./card.utils";

const initialState: ICardState = {
  hidden: true,
  items: [],
};

const slice = createSlice({
  name: "card",
  initialState,
  reducers: {
    cardToggleHidden: (state) => {
      state.hidden = !state.hidden;
    },
    addItem: (state, action: PayloadAction<addItemType>) => {
      state.items = addItemToCard(state.items, action.payload);
    },
    removeItemFromCard: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decreaseItem: (state, action: PayloadAction<ICardItem>) => {
      state.items = decreaseItemQuantity(state.items, action.payload);
    },
  },
});

export const { cardToggleHidden, addItem, removeItemFromCard, decreaseItem } =
  slice.actions;
export default slice.reducer;
