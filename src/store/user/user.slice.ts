import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserState, IUser } from "../../interfaces";

const initialState: IUserState = {
  currentUser: null,
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<IUser | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = slice.actions;
export default slice.reducer;
