import React from "react";

import { CollectionPreview } from "../CollectionPreview/CollectionPreview";

import { collectionsSelector } from "../../store/collection/collection.selectors";
import { useSelector } from "react-redux";

export const CollectionOverview: React.FC = () => {
  const collections = useSelector(collectionsSelector);
  return (
    <>
      {collections.map(({ id, ...other }) => {
        return <CollectionPreview key={id} {...other} />;
      })}
    </>
  );
};
