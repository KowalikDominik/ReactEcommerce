import React from "react";

import { CollectionPreview } from "../CollectionPreview/CollectionPreview";

import { collectionsSelector } from "../../store/collection/collection.selectors";
import { useSelector } from "react-redux";
import { withSpinner } from "../withSpinner/withSpinner";

interface Props {}

const CollectionOverview: React.FC<Props> = () => {
  const collections = useSelector(collectionsSelector);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...other }) => {
        return <CollectionPreview key={id} {...other} />;
      })}
    </div>
  );
};

export default withSpinner(CollectionOverview);
