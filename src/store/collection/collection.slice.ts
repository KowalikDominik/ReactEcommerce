import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CollectionItems, ICollectionState } from "../../interfaces";

const initialState: ICollectionState = {
  collections: null,
};

const slice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    updateCollections: (state, action: PayloadAction<CollectionItems>) => {
      state.collections = action.payload;
    },
  },
});

export const { updateCollections } = slice.actions;

export default slice.reducer;
