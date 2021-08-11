import { createSelector } from "reselect";
import { RootState } from "../store";

export const direcrorySelector = createSelector(
  (state: RootState) => state.directory,
  (direcory) => direcory.items
);
