import React from "react";
import { Route, RouteComponentProps } from "react-router";

import { CollectionOverviewContainer } from "../../components/CollectionOverview/CollectionOverviewContainer";
import { CollectionPageContainer } from "../CollectionPage/CollectionPageContainer";

interface Props extends RouteComponentProps<{ match: string }> {}

export const ShopPage: React.FC<Props> = ({ match }) => {
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
