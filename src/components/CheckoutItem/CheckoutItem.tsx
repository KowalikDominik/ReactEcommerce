import React from "react";
import { useDispatch } from "react-redux";

import { ICardItem } from "../../interfaces";
import { removeItemFromCard } from "../../store/card/card.slice";
import "./CheckoutItem.scss";

interface Props {
  item: ICardItem;
}

export const CheckoutItem: React.FC<Props> = ({
  item: { name, quantity, price, imageUrl, id },
}) => {
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price * quantity} $</span>
      <div className="remove" onClick={() => dispatch(removeItemFromCard(id))}>
        &#10005;
      </div>
    </div>
  );
};
