import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import { ReactComponent as ShoppingBasket } from "../../assets/shoppingBasket.svg";
import "./CardIcon.scss";

import { cardToggleHidden } from "../../store/card/card.slice";
import { RootState } from "../../store/store";
import { countSelector } from "../../store/card/card.selectors";

interface Props {}

const CardIcon: React.FC<Props> = () => {
  //const itemCount = useSelector(countSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("#card icon render");
    return () => {};
  });
  return (
    <div className="card-icon" onClick={() => dispatch(cardToggleHidden())}>
      <ShoppingBasket className="shopping-icon" />
      <span className="item-count">{""}</span>
    </div>
  );
};

export default CardIcon;
