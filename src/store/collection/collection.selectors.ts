import { createSelector } from "reselect";
import { RootState } from "../store";

export const collectionsSelector = createSelector(
  (state: RootState) => state.collection,
  (collection) => collection.collections
);

export const collectionsCategorySelector = (idName: string) =>
  createSelector(
    (state: RootState) => state.collection,
    (collection) => {
      return collection[idName];
    }
  );
