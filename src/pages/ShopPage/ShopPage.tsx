import React from "react";
import { Route, RouteComponentProps } from "react-router";
import { CollectionOverview } from "../../components/CollectionOverview/CollectionOverview";
import { CollectionPage } from "../CollectionPage/CollectionPage";

interface Props extends RouteComponentProps<any> {
  props: any;
}

export const ShopPage: React.FC<Props> = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
