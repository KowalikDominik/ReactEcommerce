import React from "react";

import { CollectionPreview } from "../CollectionPreview/CollectionPreview";

import { collectionsSelector } from "../../store/collection/collection.selectors";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { title } from "process";

interface Props {}

export const CollectionOverview: React.FC<Props> = () => {
  const collections = useSelector(collectionsSelector);

  return (
    <div className="collection-overview">
      {Object.keys(collections).map((name) => (
        <CollectionPreview key={name} {...collections[name]} />
      ))}
    </div>
  );
};
