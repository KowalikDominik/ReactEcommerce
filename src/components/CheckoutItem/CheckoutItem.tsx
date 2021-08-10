import React from "react";
import { useDispatch } from "react-redux";

import { ICardItem } from "../../interfaces";
import { addItem, removeItemFromCard } from "../../store/card/card.slice";
import { decreaseItem } from "../../store/card/card.slice";
import "./CheckoutItem.scss";

interface Props {
  item: ICardItem;
}

export const CheckoutItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const { name, quantity, price, imageUrl, id } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => (quantity > 1 ? dispatch(decreaseItem(item)) : null)}
        >
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price * quantity} $</span>
      <div className="remove" onClick={() => dispatch(removeItemFromCard(id))}>
        &#10005;
      </div>
    </div>
  );
};
