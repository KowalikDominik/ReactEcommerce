import { createSelector } from "reselect";
import { RootState } from "../store";

export const directorySelector = createSelector(
  (state: RootState) => state.directory,
  (direcory) => direcory.items
);
