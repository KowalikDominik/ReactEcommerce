import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as ShoppingBasket } from "../../assets/shoppingBasket.svg";
import "./CardIcon.scss";

import { cardToggleHidden } from "../../store/card/card.slice";
import { RootState } from "../../store/store";

interface Props {}

const CardIcon: React.FC<Props> = () => {
  const itemCount = useSelector(({ card: { items } }: RootState) =>
    items.reduce((acc, item) => acc + item.quantity, 0)
  );
  const dispatch = useDispatch();

  return (
    <div className="card-icon" onClick={() => dispatch(cardToggleHidden())}>
      <ShoppingBasket className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CardIcon;
