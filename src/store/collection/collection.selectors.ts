import { createSelector } from "reselect";
import { RootState } from "../store";

const ID_OF_NAME = { hats: 1, sneakers: 2, jackets: 3, womens: 4, mens: 5 };

export const collectionsSelector = (state: RootState) => state.collection;

export const collectionsCategorySelector = (idName: string) =>
  createSelector(
    (state: RootState) => state.collection,
    (collection) => {
      return collection.find((coll) => coll.id === ID_OF_NAME[idName]);
    }
  );
