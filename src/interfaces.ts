import firebase from "firebase";

export interface ICollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
export interface ICollection {
  id: number;
  title: string;
  routeName: string;
  items: ICollectionItem[];
}

export type CollectionItems = {
    [key: string]: ICollection;
  };

export interface ICollectionState {
  collections: CollectionItems | null
}

export interface IUser extends firebase.User {
  id: string;
}
export interface IUserState {
  currentUser: IUser | null;
}

export interface ICardState {
  hidden: boolean;
  items: ICardItem[];
}

export interface ICardItem extends ICollectionItem {
  quantity: number;
}

export type addItemType = Omit<ICardItem, "quantity">;

interface IDirecoryItem {
  title: string;
  imageUrl: string;
  id: number;
  size: string;
  linkUrl: string;
}

export interface IDirectoryState {
  items: IDirecoryItem[];
}
