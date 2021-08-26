import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { CollectionMap } from "../../components/CollectionMap/CollectionMap";
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
    return <CollectionMap title={title} items={items} />;
  } else {
    return <Redirect to="/404" />;
  }
};
