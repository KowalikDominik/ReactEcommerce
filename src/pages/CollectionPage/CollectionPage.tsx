import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { collectionsCategorySelector } from "../../store/collection/collection.selectors";

import "./CollectionPage.scss";

interface Props {
  collectionId: string;
}

export const CollectionPage: React.FC<Props> = ({ collectionId }) => {
  const collectionCategory = useSelector(
    collectionsCategorySelector(collectionId)
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
