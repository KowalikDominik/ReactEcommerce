import React from "react";
import { useDispatch } from "react-redux";

import { ReactComponent as ShoppingBasket } from "../../assets/shoppingBasket.svg";
import "./CardIcon.scss";

import { cardToggleHidden } from "../../store/card/card.slice";

interface Props {}

const CardIcon: React.FC<Props> = () => {
  const dispatch = useDispatch();

  return (
    <div className="card-icon" onClick={() => dispatch(cardToggleHidden())}>
      <ShoppingBasket className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
