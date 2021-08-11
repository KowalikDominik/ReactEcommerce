import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./collection.initialState";

const slice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
});

export default slice.reducer;
