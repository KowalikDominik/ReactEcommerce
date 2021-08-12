import { createSelector } from "reselect";
import { RootState } from "../store";

const collection = (state: RootState) => state.collection;

const collectionsObjectsSelector = createSelector(
  collection,
  (collection) => collection.collections
);

export const collectionsSelector = createSelector(
  collectionsObjectsSelector,
  (collections) => Object.keys(collections).map((name) => collections[name])
);
export const collectionsCategorySelector = (idName: string) =>
  createSelector(collectionsObjectsSelector, (collections) => {
    return collections ? collections[idName] : null;
  });
