import { log } from "console";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, RouteComponentProps } from "react-router";

import { CollectionOverview } from "../../components/CollectionOverview/CollectionOverview";
import {
  convertCollectionToMap,
  firestore,
} from "../../services/firebase.utils";
import { updateCollections } from "../../store/collection/collection.slice";
import { CollectionPage } from "../CollectionPage/CollectionPage";

interface Props extends RouteComponentProps<any> {
  props: any;
}

export const ShopPage: React.FC<Props> = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      dispatch(updateCollections(convertCollectionToMap(snapshot)));
    });

    return () => {};
  }, []);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
