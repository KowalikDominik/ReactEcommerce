import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICollection } from "../../interfaces";

// import { initialState } from "./collection.initialState";

interface Int {
  [key: string]: string | number;
}

const initialState: Int = {};

const slice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    updateCollections: (state, action: PayloadAction<any>) => {
      state = action.payload;
    },
  },
});

export const { updateCollections } = slice.actions;

export default slice.reducer;
