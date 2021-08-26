import React from "react";
import { useSelector } from "react-redux";
import { CheckoutItem } from "../../components/CheckoutItem/CheckoutItem";
import {
  itemsSelector,
  totalPriceSelector,
} from "../../store/card/card.selectors";

import "./CheckoutPage.scss";

interface Props {}

export const CheckoutPage: React.FC<Props> = () => {
  const items = useSelector(itemsSelector);
  const totalPrice = useSelector(totalPriceSelector);
  if (items)
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">product</div>
          <div className="header-block">name</div>
          <div className="header-block">quantity</div>
          <div className="header-block">price</div>
          <div className="header-block">remove</div>
        </div>
        {items.map((item) => (
          <CheckoutItem key={item.id} item={item}></CheckoutItem>
        ))}
        <div className="checkout-total">
          Total:
          <span className="total">{totalPrice} $</span>
        </div>
      </div>
    );
  return <div className="checkout-page">Shopping Card is empty.</div>;
};
