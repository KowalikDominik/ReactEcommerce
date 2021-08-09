import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICardItem, ICardState } from "../../interfaces";
import { addItemToCard } from "./card.utils";

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
    addItem: (state, action: PayloadAction<{}>) => {
      state.items = addItemToCard(state.items, action.payload);
    },
  },
});

export const { cardToggleHidden, addItem } = slice.actions;
export default slice.reducer;
