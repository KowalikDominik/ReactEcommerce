import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingBasket } from "../../assets/shoppingBasket.svg";
import { cardToggleHidden } from "../../redux/cardReducer/cardActions";
import "./CardIcon.scss";

interface Props {
  cardToggleHidden: () => void;
}

const CardIcon: React.FC<Props> = ({ cardToggleHidden }) => {
  return (
    <div className="card-icon" onClick={cardToggleHidden}>
      <ShoppingBasket className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cardToggleHidden: () => dispatch(cardToggleHidden()),
});

export default connect(null, mapDispatchToProps)(CardIcon);
