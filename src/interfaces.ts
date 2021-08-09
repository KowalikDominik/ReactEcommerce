import firebase from "firebase";

export interface ICardItem extends ICollectionItem {
  quantity: number;
}
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

export interface IUser extends firebase.User {
  id: string;
}
export interface IUserState {
  currentUser: IUser | null;
}
