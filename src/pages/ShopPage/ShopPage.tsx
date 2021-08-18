import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, RouteComponentProps } from "react-router";

import { fetchCollections } from "../../store/collection/collection.slice";
import { CollectionOverviewContainer } from "../../components/CollectionOverview/CollectionOverviewContainer";
import { CollectionPageContainer } from "../CollectionPage/CollectionPageContainer";

interface Props extends RouteComponentProps<{ match: string }> {}

export const ShopPage: React.FC<Props> = ({ match }) => {
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
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};
