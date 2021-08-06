import React from "react";
import { ICollectionItem } from "../../interfacses";
import { CustomButton } from "../CustomButton/CustomButton";

import "./CollectionItem.scss";
interface Props extends ICollectionItem {}

export const CollectionItem: React.FC<Props> = ({ imageUrl, name, price }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted type="button">
        Add to card
      </CustomButton>
    </div>
  );
};
