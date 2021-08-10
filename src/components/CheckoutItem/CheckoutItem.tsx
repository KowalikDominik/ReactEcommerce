import React from "react";

import { ICardItem } from "../../interfaces";
import "./CheckoutItem.scss";

interface Props {
  item: ICardItem;
}

export const CheckoutItem: React.FC<Props> = ({
  item: { name, quantity, price, imageUrl, id },
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price * quantity} $</span>
      <div className="remove">&#10005;</div>
    </div>
  );
};
