import React from "react";

import { ICardItem } from "../../interfaces";
import "./CardItem.scss";

interface Props extends ICardItem {}

export const CardItem: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  quantity,
}) => {
  return (
    <div className="card-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
