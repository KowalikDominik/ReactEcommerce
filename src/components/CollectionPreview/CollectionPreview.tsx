import React from "react";

import { ICollectionItem } from "../../interfacses";
import { CollectionItem } from "../CollectionItem/CollectionItem";
import "./CollectionPreview.scss";

interface Props {
  title: string;
  items: ICollectionItem[];
}

export const CollectionPreview: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem {...item} />
          ))}
      </div>
    </div>
  );
};
