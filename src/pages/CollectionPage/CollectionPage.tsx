import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Redirect } from "react-router-dom";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { collectionsCategorySelector } from "../../store/collection/collection.selectors";
import { HomePage } from "../HomePage/HomePage";

import "./CollectionPage.scss";

type MatchParams = {
  collectionId: string;
};
interface Props extends RouteComponentProps<MatchParams> {}

export const CollectionPage: React.FC<Props> = ({ match, history }) => {
  const collectionCategory = useSelector(
    collectionsCategorySelector(match.params.collectionId)
  );

  if (collectionCategory) {
    const { title, items } = collectionCategory;
    return (
      <div className="collection-page">
        <h1 className="title">{title}</h1>
        <div className="items">
          {items.map((collection) => (
            <CollectionItem key={collection.id} {...collection} />
          ))}
        </div>
      </div>
    );
  } else {
    return <Redirect to="/404" />;
  }
};
