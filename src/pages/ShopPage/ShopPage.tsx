import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, RouteComponentProps } from "react-router";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import { withSpinner } from "../../components/withSpinner/withSpinner";
import {
  convertCollectionToMap,
  firestore,
} from "../../services/firebase.utils";
import { updateCollections } from "../../store/collection/collection.slice";
import { CollectionPage } from "../CollectionPage/CollectionPage";

interface Props extends RouteComponentProps<any> {
  props: any;
}

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);

export const ShopPage: React.FC<Props> = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      dispatch(updateCollections(convertCollectionToMap(snapshot)));
      setLoading(false);
    });

    return () => {};
  }, [dispatch]);
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} />
        )}
      />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
