import React from "react";

import { CollectionPreview } from "../CollectionPreview/CollectionPreview";

import { collectionsSelector } from "../../store/collection/collection.selectors";
import { useSelector } from "react-redux";

interface Props {}

export const CollectionOverview: React.FC<Props> = () => {
  const collections = useSelector(collectionsSelector);
  console.log(collections);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectioProps }) => (
        <CollectionPreview key={id} {...otherCollectioProps} />
      ))}
    </div>
  );
};
