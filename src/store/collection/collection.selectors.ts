import { createSelector } from "reselect";
import { ICollection, ICollectionItem } from "../../interfaces";
import { RootState } from "../store";

const collection = (state: RootState) => state.collection;

const collectionsObjectsSelector = createSelector(
  collection,
  (collection) => collection.collections
);
export const collectionStatus = createSelector(
  collection,
  (collection) => collection.status
);

export const collectionsSelector = createSelector(
  collectionsObjectsSelector,
  (collections) => Object.keys(collections).map((name) => collections[name])
);
export const collectionsCategorySelector = (idName: string) =>
  createSelector(collectionsObjectsSelector, (collections) => {
    return collections ? collections[idName] : null;
  });
const arrayOfAllProductsSelector = createSelector(
  collectionsSelector,
  (collections) =>
    collections
      ? collections.reduce(
          (accumulator: ICollectionItem[], category: ICollection) => {
            return [...accumulator, ...category.items];
          },
          []
        )
      : null
);
export const filteringCollectionsSelector = (searchName: string) =>
  createSelector(arrayOfAllProductsSelector, (products) => {
    return products
      ? searchName
        ? products.filter((item: ICollectionItem) =>
            item.name.toLowerCase().includes(searchName.toLowerCase())
          )
        : products
      : null;
  });
