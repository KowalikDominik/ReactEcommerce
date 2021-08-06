import React from "react";

import { ReactComponent as ShoppingBasket } from "../../assets/shoppingBasket.svg";
import "./CardIcon.scss";

interface Props {}

export const CardIcon: React.FC<Props> = () => {
  return (
    <div className="card-icon">
      <ShoppingBasket className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
