import { createSelector } from "reselect";
import { RootState } from "../store";

export const currentUserSelector = createSelector(
  (state: RootState) => state.user,
  (user) => user.currentUser
);
