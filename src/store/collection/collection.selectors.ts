import { createSelector } from "reselect";
import { RootState } from "../store";

export const collectionsSelector = createSelector(
  (state: RootState) => state.collection,
  (collection) => collection.collections ? Object.keys(collection?.collections).map((name) => collection.collections ? collection.collections[name] : null) : []

);
export const collectionsCategorySelector = (idName: string) =>
  createSelector(
    (state: RootState) => state.collection,
    (collection) => {
      return collection[idName];
    }
  );
