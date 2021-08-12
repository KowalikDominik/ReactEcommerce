import { createSelector } from "reselect";
import { RootState } from "../store";

export const collectionsSelector = createSelector(
  (state: RootState) => state.collection,
  (collection) => Object.keys(collection.collections).map((name) => collection.collections[name])

);
export const collectionsCategorySelector = (idName: string) =>
  createSelector(
    (state: RootState) => state.collection,
    (collection) => {
      return collection[idName];
    }
  );
