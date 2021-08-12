import React from "react";

import { CollectionPreview } from "../CollectionPreview/CollectionPreview";

import { collectionsSelector } from "../../store/collection/collection.selectors";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { title } from "process";

interface Props {}

export const  CollectionOverview: React.FC<Props> = () => {
  const collections = useSelector(collectionsSelector);
  console.log()
  return (
    <div className="collection-overview">
      {collections.map((item) => {
        const {id, ...other} = item;
        return <CollectionPreview key={id} {...other} />
      })}
    </div>
  );
};
