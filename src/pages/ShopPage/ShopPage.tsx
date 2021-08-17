import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, RouteComponentProps } from "react-router";

import { CollectionPage } from "../CollectionPage/CollectionPage";
import { CollectionOverview } from "../../components/CollectionOverview/CollectionOverview";
import { withSpinner } from "../../components/withSpinner/withSpinner";
import {
  convertCollectionToMap,
  firestore,
} from "../../services/firebase.utils";
import {
  fetchCollections,
  updateCollections,
} from "../../store/collection/collection.slice";
import { RootState } from "../../store/store";

interface Props extends RouteComponentProps<any> {
  props: any;
}

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

export const ShopPage: React.FC<Props> = ({ match }) => {
  const state = useSelector((state: RootState) => state.collection.status);
  const error = useSelector((state: RootState) => state.collection.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollections());
    return () => {};
  }, [dispatch]);
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <CollectionOverviewWithSpinner isLoading={state !== "succeeded"} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={state !== "succeeded"}
            {...props}
          />
        )}
      />
    </div>
  );
};
