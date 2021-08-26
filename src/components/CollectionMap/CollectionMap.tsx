import React from "react";
import { ICollectionItem } from "../../interfaces";
import CollectionItem from "../CollectionItem/CollectionItem";

import "./CollectionMap.scss";

interface Props {
  error?: {
    msg: string;
  };
  title: string;
  items?: ICollectionItem[];
}

export const CollectionMap: React.FC<Props> = ({
  error,
  title,
  items,
  children,
}) => {
  return error ? (
    <div className="collection-map">
      <h1 className="title">{title}</h1>
      {error.msg}
    </div>
  ) : (
    <div className="collection-map">
      <h1 className="title">{title}</h1>

      {!children
        ? items && (
            <div className="items" id={title}>
              {items.map((item) => (
                <CollectionItem key={item.id} {...item} />
              ))}
            </div>
          )
        : children}
    </div>
  );
};
